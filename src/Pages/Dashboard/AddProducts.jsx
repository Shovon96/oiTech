import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  // const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [tags, setTags] = useState([]);
  const [externalLinks, setExternalLinks] = useState({});
  const currentDate = new Date().toISOString().slice(0, 16);
  // const currentDate = new Date().toLocaleString().slice(0,16);

  const onSubmit = async (data) => {
    const tags = data.tags.split(' ')

    const productData = {
      ...data,
      owner: {
        name: user.displayName,
        image: user.photoURL,
        email: user.email,
      },
      tags,
      externalLinks,
      timestamp: currentDate,
    };


    try {
      // TODO: Send productData to your backend API to save in MongoDB
      const productPost = await axiosSecure.post('/trendings', productData);
      // console.log(productPost.data);
      if (productPost.data.insertedId) {
        toast.success('Product has been added');
      }
      navigate('/dashboard/myProducts');
    } catch (error) {
      // console.error('Error creating product:', error);

      // Show error toast
      toast.error(error.message)
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | AddProduct</title>
      </Helmet>
      <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6">Create a New Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-600">Product Name</label>
            <input {...register('name', { required: true })} type="text" id="productName" className="mt-1 p-2 w-full border rounded-md" />
            {errors.productName && <span className="text-red-500 text-sm">Product Name is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="productImage" className="block text-sm font-medium text-gray-600">Product Image URL</label>
            <input {...register('image', { required: true })} type="text" id="productImage" className="mt-1 p-2 w-full border rounded-md" />
            {errors.productImage && <span className="text-red-500 text-sm">Product Image is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
            <textarea {...register('description', { required: true })} id="description" className="mt-1 p-2 w-full border rounded-md" />
            {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Owner Information</label>
            <div className='flex justify-between gap-8'>
              <input type="text" value={user?.displayName} disabled className="mt-1 p-2 w-full border rounded-md mb-2" />
              <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
            </div>
            <input type="text" value={user?.email} disabled className="mt-1 p-2 w-full border rounded-md mb-2" />
          </div>

          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-600">Tags</label>
            <input
              type="text"
              id="tags"
              className="mt-1 p-2 w-full border rounded-md"
              {...register('tags', { required: true })}
            />
            {errors.tags && <span className="text-red-500 text-sm">Tags is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">External Links</label>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Official Site"
                className="p-2 w-full border rounded-md"
                value={externalLinks.officialSite || ''}
                onChange={(e) => setExternalLinks({ ...externalLinks, officialSite: e.target.value })}
              />
              <input
                type="text"
                placeholder="Documentation"
                className="p-2 w-full border rounded-md"
                value={externalLinks.documentation || ''}
                onChange={(e) => setExternalLinks({ ...externalLinks, documentation: e.target.value })}
              />
              <input
                type="text"
                placeholder="GitHub"
                className="p-2 w-full border rounded-md"
                value={externalLinks.github || ''}
                onChange={(e) => setExternalLinks({ ...externalLinks, github: e.target.value })}
              />
            </div>
          </div>
          {/* date and time input field */}
          <div className="mb-4">
            <label htmlFor="datetime" className="block text-sm font-medium text-gray-600">Date and Time</label>
            <input
              type="datetime-local"
              id="datetime"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={currentDate}
              min={currentDate}
              {...register('datetime', { required: true })}
            />
            {errors.datetime && <span className="text-red-500 text-sm">Date and Time are required</span>}
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProducts;
