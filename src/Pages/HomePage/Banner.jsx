
const Banner = () => {
    return (
        <div>
            <div>
                <img className="md:h-[90vh] h-[70vh] w-full relative" src="https://media.discordapp.net/attachments/1163919577130999870/1177585407869857874/R.png?ex=65730adf&is=656095df&hm=5a390e5ef6a09b5c6c36093d26e906e5dc57fda9b424db77a70e1cf564951711&=&format=webp&width=741&height=417" alt="" />
                <div className="absolute top-28 md:top-52 ml-12 text-center flex">
                    <div>
                        <h1 className="text-3xl text-white font-bold">TOOLS FOR DEVELOPERS</h1>
                        <p className="text-md text-white py-4">There are many of passages of developers.But the majori have suffered alteration in some form</p>
                        <button className="bg-[#ca8a04] text-white text-sm font-semibold py-1 px-2 rounded-lg">DISCOVER MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;