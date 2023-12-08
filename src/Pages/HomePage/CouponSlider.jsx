
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CouponSlider = () => {
    const coupons = [
        {
            id: 1,
            code: 'COUPON123',
            discountAmount: '10%',
            expiryDate: '2023-12-31',
            description: 'Get 10% off on your purchase!',
        },
        {
            id: 2,
            code: 'COUPON234',
            discountAmount: '15%',
            expiryDate: '2023-12-31',
            description: 'Get 15% off on your purchase!',
        },
        {
            id: 3,
            code: 'COUPON456',
            discountAmount: '18%',
            expiryDate: '2023-12-31',
            description: 'Get 18% off on your purchase!',
        },
        // Add more coupons as needed
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    };

    return (
        <div className='my-12'>
            <Slider {...settings} className="relative mx-auto">
                {coupons.map((coupon) => (
                    <div key={coupon.id} className="relative">
                        {/* Background image */}
                        <div
                            className="bg-cover bg-center h-80"  // Customize height and other styles as needed
                            style={{ backgroundImage: `url('https://media.discordapp.net/attachments/1163919577130999870/1177591899176046662/LAczo1Ncn0pqukIy3RnKveW1uGGNggpdMnbzctO50L7u_QUkoOk7TEHYwSaUmOkSt8D0kcDOUZbLPb9lkfi2oAz-WZDTEPvpe1cKhQ5CpLGhkGyUguIfQDQyc5IERJm3a4p3zNcw1200-h630-p-k-no-nu.png?ex=657c4b6b&is=6569d66b&hm=991d5d0efd35a12c2d536b6afca8e72c2e7a548eb5b97214987bbbf9216f8e9e&=&format=webp&quality=lossless&width=833&height=417')` }}
                        />

                        {/* Content over the background image */}
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-center">
                            <div className="bg-black opacity-60 p-4 rounded-lg max-w-6xl w-full h-72 flex items-center justify-center">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">{coupon.code}</h3>
                                    <p>Discount Amount: {coupon.discountAmount}</p>
                                    <p>Expiry Date: {coupon.expiryDate}</p>
                                    <p>{coupon.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CouponSlider;
