import React from "react";
import "./contact.css";
import { FiMapPin } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";

 export const Contact = () =>{
    return(
<div className="contact-page">
    <div className="contact-navbar">
<div className="navbar-logo">GM <span className="color1">Electronics</span></div>
<div className="navbar-title">დაგვიკავშირდით</div>
<div className="navbar-text">gorvo wrovoi awfov asdvono saofvno sfonoi afdovno afoibp0ok
                             dfoabnmq afovmmop affvoi adf sdfomo afv sfobikmos agbpo
                             </div>

    </div>
    <div className="main-page">
        <div className="main-title">დაკავშირება   </div>
        <div className="main-text">gorvo wrovoi awfov asdvono saofvno sfonoi afdovno afoibp0ok
        dfoabnmq afovmmop affvoi adf </div>
        <div className="address-title">მდებარეობა</div>
       <a href="https://www.google.com/maps/@41.61536,41.6219136,13z?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"> <div className="address-icon"><FiMapPin className="map"/></div></a>
        <div className="address-text">ლონდონი, გაერთიანებული სამეფო</div>


        <div className="number-title">ტელეფონის ნომერი</div>
 <div className="number-icon"><IoCallOutline className="call"/></div>
        <div className="number-text">
            +123-456-7890
        </div>

     
        <div className="email-title">ემაილი</div>
 <div className="email-icon"><MdOutlineEmail />
 </div>
        <div className="email-text">
         example@example.com
        </div>

    <div className="contact-card">
        <div className="card-title"></div>
    
<input type="text" name="name" className="username-input" placeholder="მომხმარებლის სახელი"/>
<input type="text" name="name" className="username-input2" placeholder="ემაილი"/>
<textarea id="userTextarea" name="userTextarea" rows="4" cols="50" className="textarea" placeholder="შეტყობინება"></textarea>
<div className="card-text">გაგზავნით თქვენ ეთანხმებით კონფიდენციალურობის განცხადებაში აღწერილი თქვენი პერსონალური მონაცემების Subx us დამუშავებას.</div>
  <a href="#"><button className="card-button">გაგზავნა</button></a>
    </div>
    <div className="follow">გამოგვყევით:</div>
   <a href="https://www.facebook.com/"> <div className="facebook"><SlSocialFacebook />
    </div></a>
  <a href="https://x.com/"><div className="twitter"><LuTwitter />
    </div></a>
   <a href="https://www.youtube.com/"> <div className="youtube"><AiOutlineYoutube />
    </div></a>
    <a href="https://www.instagram.com/"><div className="instagram"><IoLogoInstagram />
    </div></a>
    </div>
    <div className="footer">
    <div className="footer-logo">GM <span className="color2">Electronics</span></div> 
    <div className="footer-text">gofdk eosksd, sdovso sfovsoidi. adv dvaaf sf sdofdvldvvls vssp sdvp</div>
      <div className="footer-email">malto@subx.com</div>



      <div className="features">მახასიათებლები</div>
      <div className="features resourses">რესურსები</div>
      <div className="features company">კომპანია</div>

    <a href="#" className="link1"> <div className="bm ">ბიზნეს მენეჯერი</div></a> 
    <a href="#" className="link1">  <div className="bm two">კონფიგურირებადი ბოტები</div></a>
    <a href="#" className="link1"> <div className="bm three">ავტომატიზირებული პასუხები</div></a> 
    <a href="#" className="link1"> <div className="bm four">პროდუქტების ტურები</div></a> 

    <a href="#" className="link1">  <div className="bm five">თეთრიფურცელი და ბლოგი</div></a>
    <a href="#" className="link1">  <div className="bm six">უყურეთ დემო</div></a>
    <a href="#" className="link1">  <div className="bm seven">პროდუქტის ლექსიკონი</div></a>
    <a href="#" className="link1"> <div className="bm eight">ინდუსტრიის ანგარიშები</div></a>

    <a href="#" className="link1"><div className="bm nine">შესახებ</div></a> 
    <a href="#" className="link1"> <div className="bm ten">კლიენტები</div></a>
    <a href="#" className="link1"> <div className="bm eleven">საზოგადოების ფორუმი</div></a>
    <a href="#" className="link1"><div className="bm twelve">ვადა და კონფიდენციალურობა</div></a> 
       </div>
       <div className="copy-right">
        <div className="copyright-text">@ Copyright Subx. All right reserved</div>
       </div>
</div>
    );
};

