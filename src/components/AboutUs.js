import AboutUsCard from './AboutUsCard';

function AboutUs() {
    const general= "Our organization is dedicated to helping kids receive a quality education, regardless of their background or circumstances. We work with kids of all ages, from preschool to high school, and provide a variety of educational programs and services designed to meet their unique needs. We recognize that every child has different learning needs and abilities, and we tailor our programs to meet those needs. We also work closely with parents, teachers, and other community members to create a supportive and collaborative learning environment. We believe that every child deserves access to a quality education, and we are committed to making that a reality for all kids in our community."
    const individualHelp = "To help kids succeed, we offer a range of services and programs that are designed to meet them where they are and help them achieve their academic goals. We work closely with each child to understand their strengths, challenges, and goals, and then develop a customized plan of support that is tailored to their needs. Our staff are highly trained and experienced in working with kids of all ages and backgrounds, and they are passionate about helping each child reach their full potential. We recognize that every child's situation is unique, so we offer a range of services that are flexible and accessible. We may offer in-person or virtual tutoring, or provide resources and support that can be accessed online or through other means."
    const scienceCamp = "Our organization is dedicated to fostering a love of science in children by organizing science camps that are both educational and fun. Our science camps are designed to provide kids with hands-on experiences that allow them to explore the wonders of science in a supportive and encouraging environment. Through a range of activities, experiments, and projects, kids are able to learn about a variety of scientific disciplines, including biology, chemistry, physics, and environmental science. Through our science camps, we hope to inspire the next generation of scientists and science enthusiasts. We believe that by providing kids with fun and engaging science experiences, we can help them develop a lifelong love of learning and a deep appreciation for the wonders of the natural world."
    const campTitle = "Science camps";
    const indivHelpTitle = "Individual help"
    const generalTitle = "General"
    const generalPic = "https://images.pexels.com/photos/3913426/pexels-photo-3913426.jpeg"
    const individualPic ="https://images.pexels.com/photos/4173329/pexels-photo-4173329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const campPic = "https://images.pexels.com/photos/8035138/pexels-photo-8035138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    let content =
      <div class="about-us">
        <h1 class="title">About us</h1>
          <AboutUsCard title = {generalTitle} description={general} image={generalPic}></AboutUsCard>
          <AboutUsCard title = {indivHelpTitle} description={individualHelp} image={individualPic}></AboutUsCard>
          <AboutUsCard title = {campTitle} description={scienceCamp} image={campPic}></AboutUsCard>
      </div>

    return content;
  }
  
  export default AboutUs;