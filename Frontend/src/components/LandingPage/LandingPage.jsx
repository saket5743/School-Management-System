import React from 'react'
import statisda from "../../components/LandingPage/Landingimages/statisda.png";
import boy1 from "../../components/LandingPage/Landingimages/boy1.png";
import girl1 from "../../components/LandingPage/Landingimages/girl1.png";
import girl2 from "../../components/LandingPage/Landingimages/girl2.png";
import kanbanimage from "../../components/LandingPage/Landingimages/kanbanimage.png";
import man from "../../components/LandingPage/Landingimages/man.png";
import keyboard from "../../components/LandingPage/Landingimages/keyboard.png";
import mobile from "../../components/LandingPage/Landingimages/mobile.png";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Header div  */}
      <div className="w-[1520px] h-[100vh] bg-[#100F57] relative">
        <div className="flex gap-28 justify-center p-9">
          <div>
            <img src={statisda} alt="" className="w-[98px] h-[26px] top-[48px] left-[151px]"/>
          </div>
          <div className="flex gap-14 mt-3 ">
            <h1 className="font-karla font-normal text-[12px] leading-[100%] tracking-[0%] text-center capitalize text-white">
              Home
            </h1>
            <h1 className="font-karla font-normal text-[12px] leading-[100%] tracking-[0%] text-center capitalize text-white">
              Pricing
            </h1>
            <h1 className="font-karla font-normal text-[12px] leading-[100%] tracking-[0%] text-center capitalize text-white">
              Use Cases
            </h1>
            <h1 className="font-karla font-normal text-[12px] leading-[100%] tracking-[0%] text-center capitalize text-white">
              Location
            </h1>
            <h1 className="font-karla font-normal text-[12px] leading-[100%] tracking-[0%] text-center capitalize text-white">
              FAQ
            </h1>
            <h1 className="font-karla font-normal text-[12px] leading-[100%] tracking-[0%] text-center capitalize text-white">
              Company
            </h1>
          </div>
          <div className="w-[90px] h-[34px]   rounded-full border-[0.2px] p-[10px_14px] gap-[10px] bg-[#0A92DD] text-white">
            <button onClick={()=>navigate('/schoollogin')} className="w-full h-full flex items-center justify-center font-karla font-bold text-[12px] leading-[100%] tracking-[0%] capitalize">
              Login
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-[30vh] gap-6 mt-[40px]">
          <div>
            <h5 className="bg-[#FFFFFF0D] border w-[17rem] h-[2.5rem] rounded-[40px] justify-center items-center flex text-[#D89925]">
              Get Your Free Consultation Now
            </h5>
          </div>
          <div>
            <h1 className="text-4xl text-[#FFFFFF] font-bold">
              Manage your team <br /> easily with task man
            </h1>
          </div>
          <div className="text-white">
            <p className="">
              Statisdaa is a school management solution that offers
            </p>
            <p className="flex justify-center items-center">
              a personalized portal to each type of user.
            </p>
          </div>
          <div className="w-[100px] h-[34px]   rounded-full border-[0.2px] p-[10px_14px] gap-[10px] bg-[#0A92DD] text-white">
            <button className="w-full h-full flex items-center justify-center font-karla font-bold text-[12px] leading-[100%]">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* White div  */}
      <div className="w-[1520px] h-[66vh] relative"></div>
      <div>
        <img
          src={kanbanimage}
          alt="kanbanimage"
          className="absolute w-[931px] h-[672px] top-[479px] left-[255px] rounded-[16px]"
        />
      </div>
      <div className="w-[1520px] h-[260px] p-7 flex flex-col items-center justify-around">
        <div className="w-[390px] h-[50px] p-3">
          <p className="font-sans text-3xl">Trusted by company like</p>
        </div>
        <div className=" flex gap-32">
          <div>
            <svg
              width="36"
              height="33"
              viewBox="0 0 36 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3006 10.5183C13.4531 10.3666 13.5741 10.1863 13.6566 9.98768C13.7391 9.78907 13.7815 9.57609 13.7813 9.36102C13.7811 9.14596 13.7384 8.93305 13.6555 8.73457C13.5727 8.53609 13.4514 8.35597 13.2987 8.20456C13.1459 8.05318 12.9647 7.93351 12.7655 7.85247C12.5663 7.77143 12.353 7.73061 12.1379 7.73236C11.9229 7.73412 11.7103 7.77842 11.5124 7.8627C11.3145 7.947 11.1353 8.06961 10.985 8.22348C9.62699 9.59535 8.70615 11.339 8.33891 13.2342C7.97167 15.1293 8.17451 17.0907 8.92183 18.8706C9.66913 20.6504 10.9273 22.1687 12.5374 23.2336C14.1475 24.2986 16.0371 24.8623 17.9674 24.8534C19.8977 24.8446 21.7823 24.2637 23.3825 23.1841C24.9827 22.1044 26.227 20.5746 26.9579 18.788C27.689 17.0014 27.8739 15.0381 27.4891 13.1465C27.1046 11.2548 26.1679 9.51962 24.7973 8.16025C24.6453 8.00956 24.465 7.89031 24.2667 7.8093C24.0686 7.7283 23.8565 7.68712 23.6423 7.68811C23.4282 7.68911 23.2164 7.73226 23.019 7.81511C22.8216 7.89795 22.6425 8.01887 22.4917 8.17096C22.3411 8.32303 22.2218 8.50331 22.1409 8.70148C22.0599 8.89965 22.0187 9.11184 22.0196 9.32593C22.0206 9.54 22.0638 9.75179 22.1466 9.94921C22.2295 10.1466 22.3505 10.3258 22.5025 10.4765C23.4164 11.3823 24.0414 12.5388 24.2981 13.7997C24.5548 15.0606 24.4318 16.3694 23.9447 17.5605C23.4577 18.7515 22.6285 19.7714 21.5617 20.4912C20.4951 21.2109 19.239 21.5982 17.9522 21.6042C16.6654 21.6101 15.4057 21.2342 14.3325 20.5243C13.2593 19.8143 12.4207 18.802 11.9227 17.6155C11.4248 16.429 11.2899 15.1214 11.535 13.8582C11.7802 12.5949 12.3944 11.4328 13.3001 10.5186L13.3006 10.5183Z"
                fill="#98A2B3"
              />
              <path
                d="M24.7696 0.000214954C23.6989 0.00215218 22.6391 0.21645 21.6517 0.630706C20.6643 1.04496 19.7689 1.65095 19.0173 2.41358C18.7127 2.72024 18.2991 2.89358 17.8669 2.89554C17.4347 2.89751 17.0193 2.72794 16.712 2.42404C15.1753 0.904956 13.0989 0.0573993 10.9381 0.067294C8.77734 0.077189 6.70871 0.943726 5.186 2.47682C2.6926 4.99539 1.00187 8.19666 0.327526 11.676C-0.346813 15.1553 0.0255134 18.7564 1.39745 22.0241C2.76937 25.2919 5.07932 28.0795 8.03526 30.0346C10.9912 31.9898 14.4605 33.0247 18.0045 33.0084C21.5485 32.9923 25.0081 31.9257 27.946 29.9436C30.8841 27.9616 33.1685 25.1529 34.5105 21.8729C35.8524 18.5928 36.1919 14.9883 35.4857 11.5153C34.7797 8.04235 33.0598 4.85665 30.5435 2.36097C29.785 1.60526 28.8841 1.00749 27.8929 0.602269C26.9019 0.197044 25.8403 -0.00758654 24.7696 0.000214954ZM28.2483 4.67667C30.3096 6.71901 31.7187 9.32666 32.2978 12.1699C32.8768 15.0131 32.5999 17.9642 31.5018 20.65C30.4036 23.3359 28.5338 25.6356 26.1285 27.2588C23.7234 28.8819 20.8908 29.7553 17.9892 29.7685C15.0877 29.7819 12.2473 28.9345 9.82738 27.3334C7.40742 25.7325 5.51655 23.4497 4.3939 20.7741C3.27126 18.0985 2.96725 15.15 3.5203 12.3016C4.07336 9.45317 5.45866 6.83271 7.50101 4.7716C8.41472 3.85175 9.65596 3.33184 10.9525 3.32589C12.249 3.31995 13.495 3.82846 14.4171 4.7399C15.339 5.65141 16.5848 6.15997 17.8813 6.15408C19.1777 6.14817 20.4187 5.62824 21.3323 4.70837C22.2452 3.78716 23.4867 3.26629 24.7836 3.26034C26.0805 3.2544 27.3267 3.76386 28.248 4.67667"
                fill="#BDBDBD"
              />
              <path
                d="M17.9226 17.9832C19.3854 17.9832 20.5711 16.7974 20.5711 15.3347C20.5711 13.872 19.3854 12.6862 17.9226 12.6862C16.4598 12.6862 15.2741 13.872 15.2741 15.3347C15.2741 16.7974 16.4598 17.9832 17.9226 17.9832Z"
                fill="#BDBDBD"
              />
            </svg>
          </div>
          <div>
            <svg
              width="36"
              height="40"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.1675 0C26.2193 0.00219635 24.3515 0.776943 22.974 2.15426C21.5964 3.53158 20.8214 5.399 20.8193 7.34684V12.2445H14.6961V7.34684C14.6861 5.40488 13.9076 3.54587 12.5306 2.1762C11.1537 0.806534 9.29036 0.0376565 7.34804 0.0376565C5.40571 0.0376565 3.54239 0.806534 2.16545 2.1762C0.788512 3.54587 0.0099547 5.40488 0 7.34684V31.8363C0.0099547 33.7782 0.788512 35.6372 2.16545 37.0068C3.54239 38.3765 5.40571 39.1455 7.34804 39.1455C9.29036 39.1455 11.1537 38.3765 12.5306 37.0068C13.9076 35.6372 14.6861 33.7782 14.6961 31.8363V29.3873L12.2467 28.1628V31.8363C12.2467 32.8051 11.9594 33.752 11.4211 34.5575C10.8828 35.3629 10.1177 35.9906 9.22257 36.3614C8.32742 36.732 7.34244 36.8291 6.39216 36.6401C5.4419 36.4509 4.56903 35.9846 3.88393 35.2996C3.19884 34.6146 2.73228 33.7418 2.54328 32.7917C2.3543 31.8415 2.45133 30.8568 2.82213 29.9617C3.19293 29.0669 3.82086 28.3018 4.62649 27.7637C5.4321 27.2255 6.37925 26.9383 7.34813 26.9383H28.1675C29.1364 26.9383 30.0835 27.2255 30.889 27.7639C31.6946 28.302 32.3225 29.0669 32.6933 29.9619C33.0641 30.8569 33.1612 31.8417 32.972 32.7917C32.7831 33.742 32.3165 34.6146 31.6313 35.2996C30.9463 35.9846 30.0735 36.4511 29.1231 36.6401C28.1729 36.8291 27.1879 36.732 26.2927 36.3614C25.3977 35.9906 24.6326 35.3629 24.0942 34.5575C23.5561 33.752 23.2687 32.8051 23.2687 31.8363V29.3873L20.8193 28.1628V31.8363C20.8294 33.7782 21.6078 35.6372 22.9848 37.0068C24.3618 38.3765 26.2251 39.1455 28.1673 39.1455C30.1096 39.1455 31.973 38.3765 33.3499 37.0068C34.7269 35.6372 35.5054 33.7782 35.5154 31.8363V7.34684C35.5133 5.39903 34.7383 3.53164 33.3608 2.15433C31.9834 0.777016 30.1156 0.00224742 28.1675 0ZM23.2687 7.34684C23.2687 6.37811 23.5559 5.43113 24.0942 4.62566C24.6326 3.82018 25.3975 3.19237 26.2927 2.82163C27.1877 2.4509 28.1727 2.35387 29.1231 2.54284C30.0733 2.7318 30.9461 3.19826 31.6313 3.88324C32.3165 4.56821 32.7831 5.44094 32.972 6.39104C33.1612 7.34115 33.0641 8.32595 32.6933 9.22093C32.3225 10.1159 31.6946 10.8809 30.8892 11.4191C30.0835 11.9573 29.1364 12.2445 28.1675 12.2445H23.2687V7.34684ZM7.34813 2.44895C8.64688 2.45048 9.89199 2.96701 10.8103 3.88521C11.7287 4.80341 12.2452 6.04832 12.2467 7.34684V12.2445H7.34813C6.70224 12.2486 6.06193 12.1249 5.46404 11.8806C4.86616 11.6362 4.32249 11.2761 3.86434 10.8209C3.40618 10.3657 3.04258 9.82442 2.79447 9.22817C2.54637 8.63194 2.41863 7.99252 2.41863 7.34674C2.41863 6.70095 2.54637 6.06154 2.79447 5.4653C3.04258 4.86905 3.40618 4.32775 3.86434 3.87255C4.32249 3.41735 4.86616 3.05722 5.46404 2.8129C6.06193 2.56858 6.70224 2.4449 7.34813 2.44895ZM28.1675 24.489H7.34813C5.53955 24.4874 3.79445 25.1554 2.44938 26.3643V12.8181C3.79447 14.0268 5.53957 14.6949 7.34813 14.6933H28.1675C29.976 14.6948 31.7211 14.0268 33.066 12.8181V26.3643C31.7211 25.1554 29.976 24.4874 28.1675 24.489Z"
                fill="#BDBDBD"
              />
            </svg>
          </div>
          <div>
            <svg
              width="45"
              height="47"
              viewBox="0 0 45 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.8891 17.4781L39.8612 17.4502C39.8589 17.4486 39.8571 17.4465 39.856 17.4441L22.4123 0L4.96874 17.4437C4.96673 17.4457 4.9656 17.4484 4.96358 17.4497L4.93479 17.4776C2.26744 20.16 0.573204 23.6569 0.121429 27.4127C-0.330346 31.1686 0.486263 34.9676 2.44143 38.206C4.39661 41.4445 7.37815 43.9365 10.9121 45.2856C14.446 46.6348 18.3296 46.7641 21.9453 45.6526C22.2496 45.5595 22.5748 45.5595 22.8791 45.6526C26.4945 46.7636 30.3778 46.6344 33.9116 45.285C37.4453 43.9356 40.4265 41.4438 42.3815 38.2056C44.3366 34.9674 45.1533 31.1686 44.7017 27.413C44.2501 23.6574 42.5561 20.1604 39.8891 17.4781ZM11.1714 28.9811C11.0865 29.066 11.0192 29.1669 10.9732 29.2777C10.9273 29.3885 10.9036 29.5074 10.9037 29.6275C10.9347 32.7062 11.8048 35.7181 13.4203 38.3392C13.457 38.3986 13.4739 38.4682 13.4687 38.5378C13.4635 38.6074 13.4364 38.6736 13.3913 38.727C13.3462 38.7804 13.2853 38.818 13.2175 38.8347C13.1497 38.8513 13.0783 38.8462 13.0136 38.8198C11.7991 38.309 10.6958 37.5664 9.76542 36.6337C7.85871 34.7266 6.78679 32.1407 6.78506 29.4439C6.78332 26.7472 7.85193 24.1599 9.75621 22.2505L22.4123 9.59562L35.0677 22.2505C36.9723 24.1597 38.0413 26.747 38.0394 29.4439C38.0379 32.1407 36.9658 34.7266 35.0589 36.6337C34.1285 37.5664 33.0253 38.309 31.811 38.8198C31.7461 38.8462 31.6747 38.8513 31.6069 38.8347C31.5391 38.818 31.4783 38.7802 31.4331 38.727C31.388 38.6736 31.3608 38.6074 31.3556 38.5376C31.3504 38.468 31.3673 38.3984 31.404 38.3389C33.0198 35.7181 33.8904 32.7062 33.9219 29.6275C33.9219 29.5074 33.898 29.3885 33.8519 29.2775C33.8057 29.1664 33.7381 29.0658 33.653 28.9808L27.6669 22.6314C27.6072 22.5817 27.5322 22.5544 27.4545 22.5544C27.377 22.5544 27.3018 22.5817 27.2423 22.6314C27.1826 22.681 27.1425 22.7501 27.1286 22.8265C27.1146 22.9029 27.1279 22.9815 27.1662 23.049C29.4911 27.2562 27.4919 33.2993 24.158 36.6337L24.1404 36.6512C23.6802 37.1064 23.059 37.3616 22.4118 37.3614C21.7645 37.3612 21.1435 37.1055 20.6836 36.6501L20.6675 36.6337C17.3323 33.2993 15.3341 27.2569 17.6594 23.0499C17.6976 22.9824 17.711 22.9038 17.697 22.8274C17.6832 22.751 17.6429 22.6819 17.5833 22.6323C17.5238 22.5826 17.4486 22.5553 17.371 22.5553C17.2934 22.5553 17.2183 22.5826 17.1587 22.6323L11.1714 28.9811Z"
                fill="#D1D1D1"
              />
            </svg>
          </div>
          <div>
            <svg
              width="36"
              height="33"
              viewBox="0 0 36 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3005 10.5183C13.4531 10.3666 13.574 10.1863 13.6566 9.98768C13.7391 9.78907 13.7815 9.57609 13.7813 9.36102C13.7811 9.14596 13.7384 8.93305 13.6555 8.73457C13.5727 8.53609 13.4514 8.35597 13.2986 8.20456C13.1459 8.05318 12.9647 7.93351 12.7654 7.85247C12.5662 7.77143 12.3529 7.73061 12.1379 7.73236C11.9228 7.73412 11.7102 7.77842 11.5124 7.8627C11.3145 7.947 11.1353 8.06961 10.985 8.22348C9.62696 9.59535 8.70612 11.339 8.33888 13.2342C7.97164 15.1293 8.17448 17.0907 8.9218 18.8706C9.6691 20.6504 10.9273 22.1687 12.5374 23.2336C14.1474 24.2986 16.0371 24.8623 17.9674 24.8534C19.8977 24.8446 21.7822 24.2637 23.3825 23.1841C24.9827 22.1044 26.227 20.5746 26.9579 18.788C27.6889 17.0014 27.8738 15.0381 27.4891 13.1465C27.1046 11.2548 26.1679 9.51962 24.7973 8.16025C24.6453 8.00956 24.465 7.89031 24.2667 7.8093C24.0686 7.7283 23.8565 7.68712 23.6422 7.68811C23.4282 7.68911 23.2164 7.73226 23.019 7.81511C22.8216 7.89795 22.6425 8.01887 22.4917 8.17096C22.341 8.32303 22.2218 8.50331 22.1409 8.70148C22.0598 8.89965 22.0187 9.11184 22.0196 9.32593C22.0206 9.54 22.0638 9.75179 22.1465 9.94921C22.2295 10.1466 22.3505 10.3258 22.5025 10.4765C23.4164 11.3823 24.0414 12.5388 24.2981 13.7997C24.5548 15.0606 24.4317 16.3694 23.9447 17.5605C23.4577 18.7515 22.6284 19.7714 21.5617 20.4912C20.4951 21.2109 19.239 21.5982 17.9522 21.6042C16.6653 21.6101 15.4057 21.2342 14.3325 20.5243C13.2593 19.8143 12.4207 18.802 11.9227 17.6155C11.4248 16.429 11.2898 15.1214 11.535 13.8582C11.7802 12.5949 12.3944 11.4328 13.3 10.5186L13.3005 10.5183Z"
                fill="#BDBDBD"
              />
              <path
                d="M24.7695 0.000214954C23.6988 0.00215218 22.6391 0.21645 21.6517 0.630706C20.6643 1.04496 19.7689 1.65095 19.0172 2.41358C18.7127 2.72024 18.299 2.89358 17.8668 2.89554C17.4347 2.89751 17.0193 2.72794 16.712 2.42404C15.1753 0.904956 13.0988 0.0573993 10.9381 0.067294C8.77731 0.077189 6.70867 0.943726 5.18597 2.47682C2.69257 4.99539 1.00184 8.19666 0.327496 11.676C-0.346843 15.1553 0.0254829 18.7564 1.39742 22.0241C2.76934 25.2919 5.07929 28.0795 8.03523 30.0346C10.9912 31.9898 14.4604 33.0247 18.0045 33.0084C21.5485 32.9923 25.0081 31.9257 27.946 29.9436C30.8841 27.9616 33.1684 25.1529 34.5104 21.8729C35.8524 18.5928 36.1919 14.9883 35.4857 11.5153C34.7797 8.04235 33.0598 4.85665 30.5434 2.36097C29.785 1.60526 28.8841 1.00749 27.8929 0.602269C26.9019 0.197044 25.8402 -0.00758654 24.7695 0.000214954ZM28.2483 4.67667C30.3095 6.71901 31.7187 9.32666 32.2977 12.1699C32.8768 15.0131 32.5999 17.9642 31.5017 20.65C30.4036 23.3359 28.5338 25.6356 26.1285 27.2588C23.7233 28.8819 20.8908 29.7553 17.9892 29.7685C15.0877 29.7819 12.2473 28.9345 9.82735 27.3334C7.40739 25.7325 5.51652 23.4497 4.39387 20.7741C3.27122 18.0985 2.96722 15.15 3.52027 12.3016C4.07333 9.45317 5.45863 6.83271 7.50098 4.7716C8.41469 3.85175 9.65593 3.33184 10.9524 3.32589C12.249 3.31995 13.4949 3.82846 14.417 4.7399C15.3389 5.65141 16.5848 6.15997 17.8812 6.15408C19.1776 6.14817 20.4187 5.62824 21.3322 4.70837C22.2451 3.78716 23.4867 3.26629 24.7836 3.26034C26.0805 3.2544 27.3267 3.76386 28.248 4.67667"
                fill="#BDBDBD"
              />
              <path
                d="M17.9225 17.9832C19.3853 17.9832 20.571 16.7974 20.571 15.3347C20.571 13.872 19.3853 12.6862 17.9225 12.6862C16.4598 12.6862 15.274 13.872 15.274 15.3347C15.274 16.7974 16.4598 17.9832 17.9225 17.9832Z"
                fill="#00AB9E"
              />
            </svg>
          </div>
          <div>
            <svg
              width="36"
              height="40"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.1675 0C26.2193 0.00219635 24.3515 0.776943 22.974 2.15426C21.5964 3.53158 20.8214 5.399 20.8193 7.34684V12.2445H14.6961V7.34684C14.6861 5.40488 13.9076 3.54587 12.5306 2.1762C11.1537 0.806534 9.29036 0.0376565 7.34804 0.0376565C5.40571 0.0376565 3.54239 0.806534 2.16545 2.1762C0.788512 3.54587 0.0099547 5.40488 0 7.34684V31.8363C0.0099547 33.7782 0.788512 35.6372 2.16545 37.0068C3.54239 38.3765 5.40571 39.1455 7.34804 39.1455C9.29036 39.1455 11.1537 38.3765 12.5306 37.0068C13.9076 35.6372 14.6861 33.7782 14.6961 31.8363V29.3873L12.2467 28.1628V31.8363C12.2467 32.8051 11.9594 33.752 11.4211 34.5575C10.8828 35.3629 10.1177 35.9906 9.22257 36.3614C8.32742 36.732 7.34244 36.8291 6.39216 36.6401C5.4419 36.4509 4.56903 35.9846 3.88393 35.2996C3.19884 34.6146 2.73228 33.7418 2.54328 32.7917C2.3543 31.8415 2.45133 30.8568 2.82213 29.9617C3.19293 29.0669 3.82086 28.3018 4.62649 27.7637C5.4321 27.2255 6.37925 26.9383 7.34813 26.9383H28.1675C29.1364 26.9383 30.0835 27.2255 30.889 27.7639C31.6946 28.302 32.3225 29.0669 32.6933 29.9619C33.0641 30.8569 33.1612 31.8417 32.972 32.7917C32.7831 33.742 32.3165 34.6146 31.6313 35.2996C30.9463 35.9846 30.0735 36.4511 29.1231 36.6401C28.1729 36.8291 27.1879 36.732 26.2927 36.3614C25.3977 35.9906 24.6326 35.3629 24.0942 34.5575C23.5561 33.752 23.2687 32.8051 23.2687 31.8363V29.3873L20.8193 28.1628V31.8363C20.8294 33.7782 21.6078 35.6372 22.9848 37.0068C24.3618 38.3765 26.2251 39.1455 28.1673 39.1455C30.1096 39.1455 31.973 38.3765 33.3499 37.0068C34.7269 35.6372 35.5054 33.7782 35.5154 31.8363V7.34684C35.5133 5.39903 34.7383 3.53164 33.3608 2.15433C31.9834 0.777016 30.1156 0.00224742 28.1675 0ZM23.2687 7.34684C23.2687 6.37811 23.5559 5.43113 24.0942 4.62566C24.6326 3.82018 25.3975 3.19237 26.2927 2.82163C27.1877 2.4509 28.1727 2.35387 29.1231 2.54284C30.0733 2.7318 30.9461 3.19826 31.6313 3.88324C32.3165 4.56821 32.7831 5.44094 32.972 6.39104C33.1612 7.34115 33.0641 8.32595 32.6933 9.22093C32.3225 10.1159 31.6946 10.8809 30.8892 11.4191C30.0835 11.9573 29.1364 12.2445 28.1675 12.2445H23.2687V7.34684ZM7.34813 2.44895C8.64688 2.45048 9.89199 2.96701 10.8103 3.88521C11.7287 4.80341 12.2452 6.04832 12.2467 7.34684V12.2445H7.34813C6.70224 12.2486 6.06193 12.1249 5.46404 11.8806C4.86616 11.6362 4.32249 11.2761 3.86434 10.8209C3.40618 10.3657 3.04258 9.82442 2.79447 9.22817C2.54637 8.63194 2.41863 7.99252 2.41863 7.34674C2.41863 6.70095 2.54637 6.06154 2.79447 5.4653C3.04258 4.86905 3.40618 4.32775 3.86434 3.87255C4.32249 3.41735 4.86616 3.05722 5.46404 2.8129C6.06193 2.56858 6.70224 2.4449 7.34813 2.44895ZM28.1675 24.489H7.34813C5.53955 24.4874 3.79445 25.1554 2.44938 26.3643V12.8181C3.79447 14.0268 5.53957 14.6949 7.34813 14.6933H28.1675C29.976 14.6948 31.7211 14.0268 33.066 12.8181V26.3643C31.7211 25.1554 29.976 24.4874 28.1675 24.489Z"
                fill="#BDBDBD"
              />
            </svg>
          </div>
          <div>
            <svg
              width="45"
              height="47"
              viewBox="0 0 45 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.8891 17.4781L39.8612 17.4502C39.8589 17.4486 39.8571 17.4465 39.856 17.4441L22.4123 0L4.96874 17.4437C4.96673 17.4457 4.9656 17.4484 4.96358 17.4497L4.93479 17.4776C2.26744 20.16 0.573204 23.6569 0.121429 27.4127C-0.330346 31.1686 0.486263 34.9676 2.44143 38.206C4.39661 41.4445 7.37815 43.9365 10.9121 45.2856C14.446 46.6348 18.3296 46.7641 21.9453 45.6526C22.2496 45.5595 22.5748 45.5595 22.8791 45.6526C26.4945 46.7636 30.3778 46.6344 33.9116 45.285C37.4453 43.9356 40.4265 41.4438 42.3815 38.2056C44.3366 34.9674 45.1533 31.1686 44.7017 27.413C44.2501 23.6574 42.5561 20.1604 39.8891 17.4781ZM11.1714 28.9811C11.0865 29.066 11.0192 29.1669 10.9732 29.2777C10.9273 29.3885 10.9036 29.5074 10.9037 29.6275C10.9347 32.7062 11.8048 35.7181 13.4203 38.3392C13.457 38.3986 13.4739 38.4682 13.4687 38.5378C13.4635 38.6074 13.4364 38.6736 13.3913 38.727C13.3462 38.7804 13.2853 38.818 13.2175 38.8347C13.1497 38.8513 13.0783 38.8462 13.0136 38.8198C11.7991 38.309 10.6958 37.5664 9.76542 36.6337C7.85871 34.7266 6.78679 32.1407 6.78506 29.4439C6.78332 26.7472 7.85193 24.1599 9.75621 22.2505L22.4123 9.59562L35.0677 22.2505C36.9723 24.1597 38.0413 26.747 38.0394 29.4439C38.0379 32.1407 36.9658 34.7266 35.0589 36.6337C34.1285 37.5664 33.0253 38.309 31.811 38.8198C31.7461 38.8462 31.6747 38.8513 31.6069 38.8347C31.5391 38.818 31.4783 38.7802 31.4331 38.727C31.388 38.6736 31.3608 38.6074 31.3556 38.5376C31.3504 38.468 31.3673 38.3984 31.404 38.3389C33.0198 35.7181 33.8904 32.7062 33.9219 29.6275C33.9219 29.5074 33.898 29.3885 33.8519 29.2775C33.8057 29.1664 33.7381 29.0658 33.653 28.9808L27.6669 22.6314C27.6072 22.5817 27.5322 22.5544 27.4545 22.5544C27.377 22.5544 27.3018 22.5817 27.2423 22.6314C27.1826 22.681 27.1425 22.7501 27.1286 22.8265C27.1146 22.9029 27.1279 22.9815 27.1662 23.049C29.4911 27.2562 27.4919 33.2993 24.158 36.6337L24.1404 36.6512C23.6802 37.1064 23.059 37.3616 22.4118 37.3614C21.7645 37.3612 21.1435 37.1055 20.6836 36.6501L20.6675 36.6337C17.3323 33.2993 15.3341 27.2569 17.6594 23.0499C17.6976 22.9824 17.711 22.9038 17.697 22.8274C17.6832 22.751 17.6429 22.6819 17.5833 22.6323C17.5238 22.5826 17.4486 22.5553 17.371 22.5553C17.2934 22.5553 17.2183 22.5826 17.1587 22.6323L11.1714 28.9811Z"
                fill="#BDBDBD"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Create your task */}
      <div className="w-[1520px] h-[646px] top-[1415px] flex">
        <div className="p-[70px] justify-around w-[900px] h-[640px] flex gap-[-5px]">
          <div className="flex flex-wrap">
            <div className="w-[270px] h-[232px] p-4">
              <div className="flex gap-16">
                <p className="font-sans w-[150px] ">Slack integration</p>
                <div className="flex py-3 gap-[1px]">
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                </div>
              </div>
              <div className="text-xs text-gray-500 py-4">
                Statisdaa is a school <br />
                management solution that offers <br />
                a personalized portal to each type <br />
                of user.
              </div>
              <div className="flex gap-12">
                <div className="bg-[#FFF9EB] p-2">
                  <p className="text-[#D89925] text-xs">Development</p>
                </div>
                <div className="flex">
                  <img
                    src={girl1}
                    alt="girl1"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <img
                    src={boy1}
                    alt="boy1"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <img
                    src={girl2}
                    alt="girl2"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center py-4">
                <hr className="w-32 border-t border-gray-300" />
                <hr className="w-32 border-t border-orange-500" />
              </div>
              <div className="flex gap-36">
                <p className="text-gray-500 text-xs">14</p>
                <div className="flex">
                  {/* <CiCalendar className="text-gray-500" /> */}
                  <p className="text-gray-500 text-xs">7 Feb 2022</p>
                </div>
              </div>
            </div>
            <div className="w-[270px] h-[232px] p-4 mt-[38px]">
              <div className="flex gap-16">
                <p className="font-sans w-[150px] ">Slack integration</p>
                <div className="flex py-3 gap-[1px]">
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                </div>
              </div>
              <div className="text-xs text-gray-500 py-4">
                Statisdaa is a school <br />
                management solution that offers <br />
                a personalized portal to each type <br />
                of user.
              </div>
              <div className="flex gap-12">
                <div className="bg-[#FFF9EB] p-2">
                  <p className="text-[#D89925] text-xs">Development</p>
                </div>
                <div className="flex">
                  <img
                    src={girl1}
                    alt="girl1"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <img
                    src={boy1}
                    alt="boy1"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <img
                    src={girl2}
                    alt="girl2"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center py-4">
                <hr className="w-32 border-t border-gray-300" />
                <hr className="w-32 border-t border-orange-500" />
              </div>
              <div className="flex gap-36">
                <p className="text-gray-500 text-xs">14</p>
                <div className="flex">
                  {/* <CiCalendar className="text-gray-500" /> */}
                  <p className="text-gray-500 text-xs">7 Feb 2022</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap ml-[-140px]">
            <div className="w-[270px] h-[232px] p-2 -rotate-12">
              <div className="flex gap-16">
                <p className="font-sans w-[150px] ">Slack integration</p>
                <div className="flex py-3 gap-[1px]">
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                </div>
              </div>
              <div className="text-xs text-gray-500 py-4">
                Statisdaa is a school <br />
                management solution that offers <br />
                a personalized portal to each type <br />
                of user.
              </div>
              <div className="flex gap-12">
                <div className="bg-[#FFF9EB] p-2">
                  <p className="text-[#D89925] text-xs">Development</p>
                </div>
                <div className="flex">
                  <img
                    src={girl1}
                    alt="girl1"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <img
                    src={boy1}
                    alt="boy1"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <img
                    src={girl2}
                    alt="girl2"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center py-4">
                <hr className="w-32 border-t border-gray-300" />
                <hr className="w-32 border-t border-orange-500" />
              </div>
              <div className="flex gap-36">
                <p className="text-gray-500 text-xs">14</p>
                <div className="flex">
                  {/* <CiCalendar className="text-gray-500" /> */}
                  <p className="text-gray-500 text-xs">7 Feb 2022</p>
                </div>
              </div>
            </div>
            <div className="w-[270px] h-[232px] p-4 mt-[38px]">
              <div className="flex gap-16">
                <p className="font-sans w-[150px] ">Slack integration</p>
                <div className="flex py-3 gap-[1px]">
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                  <div className="bg-gray-500 w-[5px] h-[5px] rounded-[10px]"></div>
                </div>
              </div>
              <div className="text-xs text-gray-500 py-4">
                Statisdaa is a school <br />
                management solution that offers <br />
                a personalized portal to each type <br />
                of user.
              </div>
              <div className="flex gap-12">
                <div className="bg-[#FFF9EB] p-2">
                  <p className="text-[#D89925] text-xs">Development</p>
                </div>
                <div className="flex">
                  <img
                    src={girl1}
                    alt="girl1"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <img
                    src={boy1}
                    alt="boy1"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <img
                    src={girl2}
                    alt="girl2"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center py-4">
                <hr className="w-32 border-t border-gray-300" />
                <hr className="w-32 border-t border-orange-500" />
              </div>
              <div className="flex gap-36">
                <p className="text-gray-500 text-xs">14</p>
                <div className="flex">
                  {/* <CiCalendar className="text-gray-500" /> */}
                  <p className="text-gray-500 text-xs">7 Feb 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-16">
          <div className="p-6 max-w-sm h-[500px] bg-white rounded-xl shadow-md">
            <h1 className="text-xl font-bold text-gray-800 mb-3">
              Create your task
            </h1>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Statisdaa is a school management solution that offers a
              personalized portal to each type of user, ensuring that your
              institution is always engaged with teachers, students, and their
              parents
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <div className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 text-sm">
                Create your task
              </div>
              <div className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 text-sm">
                Create your task
              </div>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-md">
              <h2 className="text-base font-semibold mb-2">
                Manage the task easily and clearly
              </h2>
              <p className="text-xs leading-relaxed">
                Statisdaa increases communication between all stakeholders:
                students, teachers, parents and administrative staff, with a
                dedicated web portal for any type of end-user. Keeping your
                students and parents engaged with the academic process is a
                crucial factor in each student's success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1520px] h-[606px] flex gap-72">
        <div>
          <div className="px-24 py-16 w-[550px]">
            <h3 className="text-2xl">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </h3>
          </div>
          <div className="w-[550px] h-[173px]">
            <p className="text-gray-500 flex justify-center items-center py-6 px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Purus odio pellentesque pellentesque a. Amet <br />
              ut lobortis pellentesque a, luctus maecenas.
            </p>
            <div className="text-gray-500 flex justify-center items-center py-2">
              Feugiat sed enim vitae viverra cras tristique eu. <br />
              Pellentesque bibendum volutpat metus, dictum.
            </div>
          </div>
          <div className="flex gap-12 py-16 px-24">
            <div>
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29 0.583374C13.3062 0.583374 0.583328 13.3063 0.583328 29C0.583328 44.6938 13.3062 57.4167 29 57.4167C44.6937 57.4167 57.4167 44.6938 57.4167 29C57.4167 13.3063 44.6937 0.583374 29 0.583374ZM5.74999 29C5.74999 34.3992 7.59191 39.3695 10.679 43.3169C12.847 40.4698 15.6439 38.1625 18.8512 36.5752C22.0585 34.9879 25.5893 34.1636 29.1679 34.1667C32.7002 34.1634 36.1866 34.9663 39.3616 36.5144C42.5365 38.0625 45.3162 40.3148 47.4889 43.0999C49.7272 40.1642 51.2343 36.7377 51.8855 33.1039C52.5366 29.4701 52.3131 25.7335 51.2334 22.2032C50.1538 18.673 48.249 15.4506 45.6767 12.8026C43.1044 10.1547 39.9385 8.15734 36.441 6.97585C32.9435 5.79437 29.2149 5.4627 25.5638 6.0083C21.9127 6.55391 18.444 7.96109 15.4446 10.1134C12.4453 12.2658 10.0017 15.1014 8.31584 18.3856C6.63 21.6699 5.75046 25.3084 5.74999 29ZM29 52.25C23.6627 52.2581 18.4865 50.4219 14.3473 47.0524C16.0134 44.6673 18.231 42.7199 20.8113 41.376C23.3917 40.032 26.2585 39.3313 29.1679 39.3334C32.041 39.3311 34.8732 40.0143 37.4292 41.3262C39.9853 42.6382 42.1914 44.541 43.8645 46.8767C39.6932 50.3557 34.4317 52.2577 29 52.25Z"
                  fill="#AAAAAA"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">80,000K</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src={mobile}
            alt="mobile"
            className="w-[519px] h-[613px] py-12 top-[24px] ml-36"
          />
        </div>
      </div>

      <div className="w-[1520px] h-[854px] top-[2703px] left-[4px]">
        <div className="py-10">
          <div>
            <h2 className="font-sans text-[#1777F7] text-3xl flex justify-center">
              Pick up the best plan
            </h2>
          </div>
          <div>
            <p className="text-gray-500 flex justify-center items-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            </p>
            <p className="text-gray-500 flex justify-center items-center">
              elit. Purus odio pellentesque pellentesque a. Amet
            </p>
            <p className="text-gray-500 flex justify-center items-center">
              ut lobortis pellentesque a, luctus maecenas.
            </p>
          </div>
        </div>
        {/* second div  */}
        <div className="flex flex-row gap-0">
          {/* first  */}
          <div className="flex-1 mt-10 ml-6 h-[524px] w-[360px] mr-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                Standard
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              odio pellentesque pellentesque a. Amet
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-1">$15</div>
            <div className="text-gray-500 mb-6">/Month</div>
            <ul className="space-y-3 mb-6">
              {Array(3).fill(
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    For 1–10 people in a team
                  </span>
                </li>
              )}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
              Choose
            </button>
          </div>
          {/* second */}
          <div className="flex-1 mr-6 h-[524px] w-[360px] p-6 bg-[#0B0641] rounded-2xl shadow-lg border border-gray-200">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                Standard
              </span>
            </div>
            <p className="text-white text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              odio pellentesque pellentesque a. Amet
            </p>
            <div className="text-3xl font-bold text-white mb-1">$15</div>
            <div className="text-white mb-6">/Month</div>
            <ul className="space-y-3 mb-6">
              {Array(3).fill(
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">For 1–10 people in a team</span>
                </li>
              )}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
              Choose
            </button>
          </div>
          {/* Third  */}
          <div className="flex-1 mt-10 mr-6 h-[524px] w-[360px] p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                Standard
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              odio pellentesque pellentesque a. Amet
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-1">$15</div>
            <div className="text-gray-500 mb-6">/Month</div>
            <ul className="space-y-3 mb-6">
              {Array(3).fill(
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    For 1–10 people in a team
                  </span>
                </li>
              )}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
              Choose
            </button>
          </div>
        </div>
      </div>

      {/* Interesting Option  */}
      <div className="w-[1520px] h-[746px] flex flex-col items-center justify-center">
        <div className="flex p-16 gap-36  justify-around">
          <div>
            <p className="font-sans text-2xl font-semibold">
              Interesting option <br /> from customer
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Purus odio pellentesque <br />
              pellentesque a Amet.
            </p>
          </div>
        </div>
        <div className="flex w-[70rem] rounded-[8px] bg-[#0B0641] h-[33rem] justify-center p-20 gap-20">
          <div>
            <img
              src={man}
              alt="man"
              className="w-[459px] h-[356px] rounded-[8px]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-[76px] h-[36px] rounded-[4px] p-1  gap-[10px] bg-[#FFFFFF]">
              <p className="font-sans text-[#1777F7] font-semibold">Standard</p>
            </div>
            <div>
              <p className="text-xs text-white w-[250px]">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Purus odio pellentesque <br /> pellentesque a. Amet
              </p>
            </div>
            <div className="flex">
              <div className="text-5xl font-bold text-white">$15</div>
              <div className="text-white py-6">/Month</div>
            </div>
            <div className="bg-[#1777F7] rounded-[9px] h-[33px] flex justify-center ">
              <button className="p-[8px 20px 8px 20px] text-white">
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interesting option from customer  */}
      <div className="w-[1520px] h-[491px] flex flex-row items-start justify-start gap-[36px]">
        <div>
          <img
            src={keyboard}
            alt="keyboard"
            className="w-[580px] h-[580px] ml-36"
          />
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-10">
            <div className="w-[442px] h-[92px] py-20">
              <p className="text-4xl font-semibold">
                Interesting option <br /> from customer
              </p>
            </div>
            <div className="w-[448px] h-[104px]">
              <p className="text-[#667085]">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Eget id arcu mauris sed augue <br />
                volutpat tortor. Condimentum facilisis aenean <br />
                elit sed mattis porttitor duis ornare justo.
              </p>
            </div>
          </div>
          <div className="bg-[#1777F7] rounded-[9px] h-[33px] w-[139px] flex justify-center ">
            <button className="p-[8px 20px 8px 20px] text-white">Choose</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#100F57] w-[1520px] h-[528px] text-white">
        <div className="flex gap-20">
          <div className="flex p-36 gap-12">
            <div className="flex flex-col gap-5">
              <div>
                <table>
                  <th>Lorem ipsum dolor</th>
                </table>
              </div>
              <div>
                <table className="flex flex-col gap-3 text-sm">
                  <tr>Home Jjjjjjjjjj</tr>
                  <tr>Pricing Hfdhdfj</tr>
                  <tr>Use Cases Jsksi</tr>
                  <tr>Location Hdhdhd</tr>
                  <tr>FAQ Kdkdkdd</tr>
                  <tr>Company Jdksodk</tr>
                </table>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <table>
                  <th>Lorem ipsum dolor</th>
                </table>
              </div>
              <div>
                <table className="flex flex-col gap-3 text-sm">
                  <tr>Home Jjjjjjjjjj</tr>
                  <tr>Pricing Hfdhdfj</tr>
                  <tr>Use Cases Jsksi</tr>
                  <tr>Location Hdhdhd</tr>
                  <tr>FAQ Kdkdkdd</tr>
                  <tr>Company Jdksodk</tr>
                </table>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <table>
                  <th>Lorem ipsum dolor</th>
                </table>
              </div>
              <div>
                <table className="flex flex-col gap-3 text-sm">
                  <tr>Home Jjjjjjjjjj</tr>
                  <tr>Pricing Hfdhdfj</tr>
                  <tr>Use Cases Jsksi</tr>
                  <tr>Location Hdhdhd</tr>
                  <tr>FAQ Kdkdkdd</tr>
                  <tr>Company Jdksodk</tr>
                </table>
              </div>
            </div>
          </div>
          <div className="py-36 flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <div>
                <table>
                  <th>Lorem ipsum dolor</th>
                </table>
              </div>
              <div>
                <table className="flex flex-col gap-3 text-sm">
                  <tr>Home Jjjjjjjjjj</tr>
                </table>
              </div>
            </div>
            <div className='ml-[-30px]'>
            <div className="bg-white w-[406px] h-[68px] flex items-center justify-between rounded-[8px] px-5">
              <div className="text-gray-500 text-sm font-medium">
                Get Your Free Consultation Now
              </div>
              <button className="bg-[#0A92DD] text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-[#087bb8] transition-colors">
                Get Started
              </button>
            </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default LandingPage

