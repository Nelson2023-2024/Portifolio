
import Slider from "react-slick"

//slider configuration
const sliderSettings ={
  dots:true,
  arrows:false,
  loop:true,
  infinite:true,
  speed:800,
  slidesToShow:1,
  slidesToScroll:1,
  autoplay:true,
  mobileFirst:true,
  autoplaySpeed:3000,
  pauseOnHover:true,
}
  


//testimonial array
const people = [
  {
    id: 1,
    img: "https://tse2.mm.bing.net/th?id=OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp&pid=Api&P=0&h=220",
    comment: "Exemplary dedication to front-end development! It's a delight working with you on every project.",
    name: "Lecturer Daniel Gitau"
  },
  {
    id: 2,
    img: "https://tse3.mm.bing.net/th?id=OIP.7VThHu2VS76jFvN5_5gnlgHaEW&pid=Api&P=0&h=220",
    comment: "Your work demonstrates remarkable creativity and attention to detail. Impressive skills in building responsive websites!",
    name: "Bella, & Designer"
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    comment: "Remarkable front-end development skills paired with an excellent eye for design. Your websites are both functional and visually stunning!",
    name: "Chris, UI/UX Reviewer"
  },
  {
    id: 4,
    img: "https://tse1.mm.bing.net/th?id=OIP.KnnEOurT2Qq-6NNDlPbD5wHaLF&pid=Api&P=0&h=220",
    comment: "Your dedication to crafting seamless user experiences is remarkable. Consistently delivering top-notch work!",
    name: "Diana, User & Admirer"
  },
  {
    id: 5,
    img: "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj&pid=Api&P=0&h=220",
    comment: "Your websites are incredibly engaging and user-friendly. Navigating through your work is an absolute pleasure!",
    name: "Ethan, Visitor & Follower"
  },
  {
    id: 6,
    img: "https://tse1.mm.bing.net/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&pid=Api&P=0&h=220",
    comment: "Your commitment to creating outstanding web applications is evident in every project. You're a valuable asset to any team!",
    name: "Lewis, Supporter & Collaborator"
  },
];

function Testimonials() {
  return (
    <>
    <section className='testimonial__section' id="testimonials"> 
      <div className="container">
        <h1 data-aos="fade-up">Testimonials</h1>
        <Slider {...sliderSettings} >
          {
            people.map(({id, img, comment, name}) => (
              <div className="card" key={id} data-aos="fade-left" >
                <img src={img} alt="testimonial-img" />
                <p className="text">{comment}</p>
                <p className="name">{name}</p>
              </div>
            ))
          }
        </Slider>
      </div>
    </section>
    </>
  )
}

export default Testimonials