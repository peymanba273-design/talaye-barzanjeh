import "./profile.css";


function Profile(){


  return(

    <div className="profile-page">


      <section className="profile-header">


        <div className="profile-avatar">
          B
        </div>


        <h1>
          Barzanjeh Gold
        </h1>


        <p>
          حساب کاربری طلایی
        </p>


      </section>




      <section className="profile-info">


        <div className="profile-card">

          <span>
            نام کاربر
          </span>

          <strong>
            کاربر نمونه
          </strong>

        </div>



        <div className="profile-card">

          <span>
            شماره موبایل
          </span>

          <strong>
            0912****** 
          </strong>

        </div>



        <div className="profile-card">

          <span>
            سطح حساب
          </span>

          <strong>
            طلایی
          </strong>

        </div>



        <div className="profile-card">

          <span>
            تاریخ عضویت
          </span>

          <strong>
            1405/01/01
          </strong>

        </div>


      </section>





      <section className="profile-menu">


        <ProfileItem text="ویرایش اطلاعات"/>

        <ProfileItem text="امنیت حساب"/>

        <ProfileItem text="احراز هویت"/>

        <ProfileItem text="اعلان‌ها"/>

        <ProfileItem text="پشتیبانی"/>

        <ProfileItem text="درباره برنامه"/>


        <div className="logout">
          خروج از حساب
        </div>


      </section>


    </div>

  );

}




function ProfileItem({text}){


  return(

    <div className="profile-item">


      <span>
        {text}
      </span>


      <b>
        ›
      </b>


    </div>

  );

}



export default Profile;
