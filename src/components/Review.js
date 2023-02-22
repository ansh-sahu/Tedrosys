import React from 'react'

const Review = () => {
  return (
   <div>
  <section id="testimonials">
    {/*heading-*/}
    <div className="testimonial-heading">
      <span>Comments</span>
      <h1>Clients Says</h1>
    </div>
    {/*testimonials-box-container----*/}
    <div className="testimonial-box-container">
      {/*BOX-1------------*/}
      <div className="testimonial-box">
        {/*top-----------------------*/}
        <div className="box-top">
          {/*profile---*/}
          <div className="profile">
            {/*img--*/}
            <div className="profile-img">
              <img src="images/c-1.jpg" />
            </div>
            {/*name-and-username*/}
            <div className="name-user">
              <strong>Touseeq Ijaz</strong>
              <span>@touseeqijazweb</span>
            </div>
          </div>
          {/*reviews----*/}
          <div className="reviews">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />{/*Empty star*/}
          </div>
        </div>
        {/*Comments--------------------------------------*/}
        <div className="client-comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
        </div>
      </div>
      {/*BOX-2------------*/}
      <div className="testimonial-box">
        {/*top-----------------------*/}
        <div className="box-top">
          {/*profile---*/}
          <div className="profile">
            {/*img--*/}
            <div className="profile-img">
              <img src="images/c-2.jpg" />
            </div>
            {/*name-and-username*/}
            <div className="name-user">
              <strong>J.K Rowling</strong>
              <span>@jkrowling</span>
            </div>
          </div>
          {/*reviews----*/}
          <div className="reviews">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />{/*Empty star*/}
          </div>
        </div>
        {/*Comments--------------------------------------*/}
        <div className="client-comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
        </div>
      </div>
      {/*BOX-3------------*/}
      <div className="testimonial-box">
        {/*top-----------------------*/}
        <div className="box-top">
          {/*profile---*/}
          <div className="profile">
            {/*img--*/}
            <div className="profile-img">
              <img src="images/c-3.jpg" />
            </div>
            {/*name-and-username*/}
            <div className="name-user">
              <strong>Harry Potter</strong>
              <span>@DanielRedclief</span>
            </div>
          </div>
          {/*reviews----*/}
          <div className="reviews">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />{/*Empty star*/}
          </div>
        </div>
        {/*Comments--------------------------------------*/}
        <div className="client-comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
        </div>
      </div>
      {/*BOX-4------------*/}
      <div className="testimonial-box">
        {/*top-----------------------*/}
        <div className="box-top">
          {/*profile---*/}
          <div className="profile">
            {/*img--*/}
            <div className="profile-img">
              <img src="images/c-4.jpg" />
            </div>
            {/*name-and-username*/}
            <div className="name-user">
              <strong>Oliva</strong>
              <span>@Olivaadward</span>
            </div>
          </div>
          {/*reviews----*/}
          <div className="reviews">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />{/*Empty star*/}
          </div>
        </div>
        {/*Comments--------------------------------------*/}
        <div className="client-comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Review
