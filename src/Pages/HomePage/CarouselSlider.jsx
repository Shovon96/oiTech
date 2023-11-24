import { Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const CarouselSlider = () => {
    return (
        <Swiper
            style={{}}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            autoplay={{ delay: 3000 }}
            className="mySwiper">
            <SwiperSlide>
                <img style={{ position: 'relative', height: '90vh', width: '100%' }} src="https://media.discordapp.net/attachments/1163919577130999870/1177585828596289607/R.png?ex=65730b44&is=65609644&hm=f361f9d46b9b96ea85379fbf53aed5603e76ce538f0d04071b125e0b2145fd70&=&format=webp&width=899&height=417" alt="" />
                <div style={{ position: 'absolute', top: '200px', height: '100%', width: '100%', textAlign: 'center', marginLeft: '250px', color: 'white', display: 'flex' }}>
                    <div>
                        <h1 className='text-5xl font-bold my-2'>TOOLS FOR DEVELOPERS</h1>
                        <p className='text-lg mb-3'>There are many of passages of developers.But the majori have suffered alteration in some form</p>
                        <button style={{ fontWeight: 'bold', padding: '10px 20px', border: 'none', color: 'white', backgroundColor: '#ca8a04', borderRadius: '10px' }}>DISCOVER MORE</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ position: 'relative', height: '90vh', width: '100%' }} src="https://media.discordapp.net/attachments/1163919577130999870/1177585407869857874/R.png?ex=65730adf&is=656095df&hm=5a390e5ef6a09b5c6c36093d26e906e5dc57fda9b424db77a70e1cf564951711&=&format=webp&width=741&height=417" alt="" />
                <div style={{ position: 'absolute', top: '200px', height: '100%', width: '100%', textAlign: 'center', marginLeft: '250px', color: 'white', display: 'flex' }}>
                    <div>
                        <h1 className='text-5xl font-bold my-2'>TOOLS FOR DEVELOPERS</h1>
                        <p className='text-lg mb-3'>There are many of passages of developers.But the majori have suffered alteration in some form</p>
                        <button style={{ fontWeight: 'bold', padding: '10px 20px', border: 'none', color: 'white', backgroundColor: '#ca8a04', borderRadius: '10px' }}>DISCOVER MORE</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ height: '90vh', width: '100%' }} src="https://media.discordapp.net/attachments/1163919577130999870/1177590689429729351/R.png?ex=65730fca&is=65609aca&hm=c520ea2ebd96fb2bade224e0349d28c462cfee5d1c93704197078185edfabd21&=&format=webp&width=741&height=417" alt="" />
                <div style={{ position: 'absolute', top: '200px', height: '100%', width: '100%', textAlign: 'center', marginLeft: '250px', color: 'white', display: 'flex' }}>
                    <div>
                        <h1 className='text-5xl font-bold my-2'>TOOLS FOR DEVELOPERS</h1>
                        <p className='text-lg mb-3'>There are many of passages of developers.But the majori have suffered alteration in some form</p>
                        <button style={{ fontWeight: 'bold', padding: '10px 20px', border: 'none', color: 'white', backgroundColor: '#ca8a04', borderRadius: '10px' }}>DISCOVER MORE</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ height: '90vh', width: '100%' }} src="https://media.discordapp.net/attachments/1163919577130999870/1177591899176046662/LAczo1Ncn0pqukIy3RnKveW1uGGNggpdMnbzctO50L7u_QUkoOk7TEHYwSaUmOkSt8D0kcDOUZbLPb9lkfi2oAz-WZDTEPvpe1cKhQ5CpLGhkGyUguIfQDQyc5IERJm3a4p3zNcw1200-h630-p-k-no-nu.png?ex=657310eb&is=65609beb&hm=dce4b07775c3d89866d792d270d0d44f214d440d69c6276335652bbc3f9797cc&=&format=webp&width=833&height=417" alt="" />
                <div style={{ position: 'absolute', top: '200px', height: '100%', width: '100%', textAlign: 'center', marginLeft: '250px', color: 'white', display: 'flex' }}>
                    <div>
                        <h1 className='text-5xl font-bold my-2'>TOOLS FOR DEVELOPERS</h1>
                        <p className='text-lg mb-3'>There are many of passages of developers.But the majori have suffered alteration in some form</p>
                        <button style={{ fontWeight: 'bold', padding: '10px 20px', border: 'none', color: 'white', backgroundColor: '#ca8a04', borderRadius: '10px' }}>DISCOVER MORE</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ height: '90vh', width: '100%' }} src="https://media.discordapp.net/attachments/1163919577130999870/1177593067478458429/TipstoMakeaCareerasaGameDeveloper-660x347.png?ex=65731201&is=65609d01&hm=d0ffe0203316b6c2fb597225a14291dcf3036b3d40ff31126b50345e91f2e64a&=&format=webp" alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default CarouselSlider;