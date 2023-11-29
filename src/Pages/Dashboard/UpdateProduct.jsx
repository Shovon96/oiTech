import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UpdateProduct = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { id } = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: updatedData = [], refetch } = useQuery({
        queryKey: ['updatedData'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/trending/${id}`);
            return response.data;
        }
    })
    //   console.log(updatedData);
    const { image, name, description, tags, externalLinks } = updatedData || {}

    const onSubmit = async (data) => {
        const tags = data.tags.split(' ') || data.tags.split(',');

        const productData = {
            ...data,
            tags,
            externalLinks: {
                officialSite: data.officialSite,
                documentation: data.documentation,
                github: data.github,
            },
        };

        try {
            await axiosSecure.patch(`/trendings/${id}`, productData);
            refetch()
            // Show success toast
            toast.success('Product has been updated');
            // Redirect to My Products page
            navigate('/dashboard/myProducts');
        } catch (error) {
            console.error('Error updating product:', error);
            // Show error toast
            toast.error('Failed to update product');
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-6">Update Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Product Name</label>
                    <input defaultValue={name} {...register('name', { required: true })} type="text" id="name" className="mt-1 p-2 w-full border rounded-md" />
                    {errors.name && <span className="text-red-500 text-sm">Product Name is required</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-600">Product Image URL</label>
                    <input defaultValue={image} {...register('image', { required: true })} type="text" id="image" className="mt-1 p-2 w-full border rounded-md" />
                    {errors.image && <span className="text-red-500 text-sm">Product Image is required</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                    <textarea {...register('description', { required: true })} defaultValue={description} id="description" className="mt-1 p-2 w-full border rounded-md" />
                    {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-600">Tags</label>
                    <input
                        type="text"
                        id="tags"
                        className="mt-1 p-2 w-full border rounded-md"
                        {...register('tags', { required: true })}
                        defaultValue={tags}
                    />
                    {errors.tags && <span className="text-red-500 text-sm">Tags are required</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">External Links</label>
                    <div className="space-y-2">
                        <input
                            type="text"
                            placeholder="Official Site"
                            className="p-2 w-full border rounded-md"
                            {...register('officialSite')}
                            defaultValue={externalLinks?.officialSite}
                        />
                        <input
                            type="text"
                            placeholder="Documentation"
                            className="p-2 w-full border rounded-md"
                            {...register('documentation')}
                            defaultValue={externalLinks?.documentation}
                        />
                        <input
                            type="text"
                            placeholder="GitHub"
                            className="p-2 w-full border rounded-md"
                            {...register('github')}
                            defaultValue={externalLinks?.github}
                        />
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
