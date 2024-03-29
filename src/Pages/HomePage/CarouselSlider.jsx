import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img style={{ position: 'relative', height: '90vh', width: '100%' }} src="https://media.discordapp.net/attachments/1163919577130999870/1177585828596289607/R.png?ex=66192844&is=6606b344&hm=a1bab9e39b85f55b76eb15fffc7ba270240a4d69150b23113ee4b0c2a1314516&=&format=webp&quality=lossless&width=550&height=255" alt="" />
                <div style={{ position: 'absolute', top: '200px', height: '100%', width: '100%', textAlign: 'center', marginLeft: '250px', color: 'white', display: 'flex' }}>
                    <div>
                        <h1 className='text-5xl font-bold my-2'>TOOLS FOR DEVELOPERS</h1>
                        <p className='text-lg mb-3'>There are many of passages of developers.But the majori have suffered alteration in some form</p>
                        <button style={{ fontWeight: 'bold', padding: '10px 20px', border: 'none', color: 'white', backgroundColor: '#ca8a04', borderRadius: '10px' }}>DISCOVER MORE</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ position: 'relative', height: '90vh', width: '100%' }} src="https://media.discordapp.net/attachments/1163919577130999870/1177591899176046662/LAczo1Ncn0pqukIy3RnKveW1uGGNggpdMnbzctO50L7u_QUkoOk7TEHYwSaUmOkSt8D0kcDOUZbLPb9lkfi2oAz-WZDTEPvpe1cKhQ5CpLGhkGyUguIfQDQyc5IERJm3a4p3zNcw1200-h630-p-k-no-nu.png?ex=66192deb&is=6606b8eb&hm=89c09dab4e917dcd9cccea4895885e4b6615a359e44a6e5902e6edbc3031c627&=&format=webp&quality=lossless&width=550&height=275" alt="" />
                <div style={{ position: 'absolute', top: '200px', height: '100%', width: '100%', textAlign: 'center', marginLeft: '250px', color: 'white', display: 'flex' }}>
                    <div>
                        <h1 className='text-5xl font-bold my-2'>TOOLS FOR DEVELOPERS</h1>
                        <p className='text-lg mb-3'>There are many of passages of developers.But the majori have suffered alteration in some form</p>
                        <button style={{ fontWeight: 'bold', padding: '10px 20px', border: 'none', color: 'white', backgroundColor: '#ca8a04', borderRadius: '10px' }}>DISCOVER MORE</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ height: '90vh', width: '100%' }} src="https://media.discordapp.net/attachments/1163919577130999870/1177590689429729351/R.png?ex=66192cca&is=6606b7ca&hm=f1207cfa84a5416020f81f0167c4bdc5afc51bcbcd3ea05a04c4bbf9e6f0f29c&=&format=webp&quality=lossless&width=741&height=417" alt="" />
                <div style={{ position: 'absolute', top: '200px', height: '100%', width: '100%', textAlign: 'center', marginLeft: '250px', color: 'white', display: 'flex' }}>
                    <div>
                        <h1 className='text-5xl font-bold my-2'>TOOLS FOR DEVELOPERS</h1>
                        <p className='text-lg mb-3'>There are many of passages of developers.But the majori have suffered alteration in some form</p>
                        <button style={{ fontWeight: 'bold', padding: '10px 20px', border: 'none', color: 'white', backgroundColor: '#ca8a04', borderRadius: '10px' }}>DISCOVER MORE</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ height: '90vh', width: '100%' }} src="https://media.discordapp.net/attachments/1163919577130999870/1177585407869857874/R.png?ex=661927df&is=6606b2df&hm=2a0b93669878cb5cee04b1ec4fc630e271eedfd07ca55ee4162f49f7db695e53&=&format=webp&quality=lossless&width=550&height=309" alt="" />
                <div style={{ position: 'absolute', top: '200px', height: '100%', width: '100%', textAlign: 'center', marginLeft: '250px', color: 'white', display: 'flex' }}>
                    <div>
                        <h1 className='text-5xl font-bold my-2'>TOOLS FOR DEVELOPERS</h1>
                        <p className='text-lg mb-3'>There are many of passages of developers.But the majori have suffered alteration in some form</p>
                        <button style={{ fontWeight: 'bold', padding: '10px 20px', border: 'none', color: 'white', backgroundColor: '#ca8a04', borderRadius: '10px' }}>DISCOVER MORE</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{ height: '90vh', width: '100%' }} src="https://media.discordapp.net/attachments/1163919577130999870/1177593067478458429/TipstoMakeaCareerasaGameDeveloper-660x347.png?ex=66192f01&is=6606ba01&hm=4ba6a11c169135648c029a86ffa719765958195500a5a548cf691c94abfba566&=&format=webp&quality=lossless" alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default CarouselSlider;