function Works () {
    const photos = [
        '/myBlog.png'
    ]
    return(
        <div className="projects">
            <h2>
                Here are some of the projects that I've worked on: 
            </h2>
            <a href="https://yvettes-mern-blog-lfrz.vercel.app/">
            <div class="card">
  <div class="card-image-container">
    <img src="/myBlog.png" alt="" />
  </div>
  <p class="card-title">myBlog</p>
  <p class="card-des">
    This is a blog website built using a MERN stack where I can login and post articles. <br /> *Current articles are simply a placeholder written by ChatGPT.*
  </p>
</div>
</a>
<a href="https://youths-reward-b96df92ec794.herokuapp.com/">
            <div class="card">
  <div class="card-image-container">
    <img src="/youths-reward.png" alt="" />
  </div>
  <p class="card-title"> Youths Reward</p>
  <p class="card-des">
    An E-commerce website built using a MERN stack where users can register/login and purchase products utilizing STRIPE.
  </p>
</div>
</a>
<a href="https://ai-generated-images-eosin.vercel.app/">
            <div class="card">
  <div class="card-image-container">
    <img src="/ai-img-gen.png" alt="" />
  </div>
  <p class="card-title"> AI Image Generator</p>
  <p class="card-des">
    A MERN stack web application that handles user logins, posts, likes, and utilizes OpenAI's API to generate images
  </p>
</div>
</a>
<a href="https://github.com/rodriguezr1016/employee-tracker">
            <div class="card">
  <div class="card-image-container">
    <img src="/employee-tracker.png" alt="" />
  </div>
  <p class="card-title">Employee Manager</p>
  <p class="card-des">
  An application that is ran from the terminal that utilizes mysql, node.js, and inquirer to keep track of a company's employees.
  </p>
</div>
</a>

        </div>
    )
};

export default Works;