import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Row,
  Column,
  Img,
  Text,
  Line,
  PagerIndicator,
  Input,
  CheckBox,
  Button,
} from "components";

const RegisterationPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/onboarding");
  }
  function handleNavigate7() {
    navigate("/onboarding");
  }

  return (
    <>
      <Row className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]">
        <Column
          className="bg-cover bg-repeat items-center w-[55%]"
          style={{ backgroundImage: "url('images/img_leftsection.png')" }}
        >
          <Column className="bg-black_900_b1 items-center lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] w-[100%]">
            <Img
              src="images/img_flare.svg"
              className="lg:h-[382px] xl:h-[436px] 2xl:h-[491px] 3xl:h-[589px] w-[100%]"
              alt="flare"
            />
            <Text
              className="common-pointer font-semibold lg:leading-[42px] xl:leading-[48px] 2xl:leading-[54px] 3xl:leading-[64px] lg:mt-[171px] xl:mt-[196px] 2xl:mt-[221px] 3xl:mt-[265px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-center text-white_A700 w-[42%]"
              onClick={handleNavigate1}
            >
              Your Content
              <br />
              Market Place
            </Text>
            <Line className="bg-teal_A400 h-[5px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[22%]" />
            <Img
              src="images/img_theonlinecoll.svg"
              className="lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[64%]"
              alt="Theonlinecoll"
            />
            <PagerIndicator
              className="h-[1px] lg:mb-[41px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[63px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[max-content]"
              count={3}
              activeCss="undefined"
              activeIndex={1}
              inactiveCss="undefined"
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </Column>
        </Column>
        <Column className="bg-white_A700 lg:p-[34px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[52px] w-[45%]">
          <Img
            src="images/img_logo.svg"
            className="xl:h-[102px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[25%]"
            alt="Logo"
          />
          <Text className="font-semibold lg:leading-[45px] xl:leading-[52px] 2xl:leading-[59px] 3xl:leading-[70px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-black_900 w-[70%]">
            <span className="text-black_901 font-poppins">
              If opportunity doesn’t
              <br />
              knock, build a
            </span>
            <span className="text-black_900 font-poppins"> </span>
            <span className="text-teal_A400 font-poppins">door</span>
            <span className="text-black_900 font-poppins">.</span>
          </Text>
          <Text className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
            Official Names
          </Text>
          <Input
            className="w-[100%]"
            wrapClassName="2xl:h-[42px] 2xl:ml-[22px] 2xl:mt-[12px] 3xl:h-[50px] 3xl:ml-[26px] 3xl:mt-[14px] flex lg:h-[32px] lg:ml-[17px] lg:mt-[9px] w-[84%] xl:h-[37px] xl:ml-[19px] xl:mt-[10px]"
            name="rectangle One"
            placeholder=""
            variant="OutlineBluegray100"
          ></Input>
          <Column className="lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius5 w-[84%]">
            <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
              Email
            </Text>
            <Input
              className="w-[100%]"
              wrapClassName="2xl:h-[43px] 2xl:mt-[12px] 3xl:h-[51px] 3xl:mt-[14px] flex lg:h-[33px] lg:mt-[9px] w-[100%] xl:h-[38px] xl:mt-[10px]"
              name="rectangle Two"
              placeholder=""
              variant="OutlineBluegray100"
            ></Input>
          </Column>
          <Text className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
            Username
          </Text>
          <Input
            className="w-[100%]"
            wrapClassName="2xl:h-[42px] 2xl:ml-[22px] 2xl:mt-[11px] 3xl:h-[50px] 3xl:ml-[26px] 3xl:mt-[13px] flex lg:h-[32px] lg:ml-[17px] lg:mt-[8px] w-[84%] xl:h-[37px] xl:ml-[19px] xl:mt-[9px]"
            name="rectangle Three"
            placeholder=""
            variant="OutlineBluegray100"
          ></Input>
          <Text className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
            Password
          </Text>
          <Input
            className="w-[100%]"
            wrapClassName="2xl:h-[42px] 2xl:ml-[22px] 2xl:mt-[11px] 3xl:h-[50px] 3xl:ml-[26px] 3xl:mt-[13px] flex lg:h-[32px] lg:ml-[17px] lg:mt-[8px] w-[84%] xl:h-[37px] xl:ml-[19px] xl:mt-[9px]"
            name="rectangle Four"
            placeholder=""
            variant="OutlineBluegray100"
          ></Input>
          <CheckBox
            className="font-normal lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-teal_A400"
            inputClassName="h-[22px] mr-[5px] w-[22px]"
            name="Iagreetoall"
            label="I agree to all the Term & Conditions"
            shape="RoundedBorder5"
            size="sm"
          ></CheckBox>
          <Button
            className="common-pointer font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[36%]"
            onClick={handleNavigate7}
            shape="RoundedBorder5"
            size="lg"
            variant="FillTealA400"
          >
            Sign Up
          </Button>
          <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_A400 w-[auto]">
            <span className="text-black_900 font-poppins">
              Already have an account?{" "}
            </span>
            <span className="text-teal_A400 font-poppins">Log In</span>
          </Text>
        </Column>
      </Row>
    </>
  );
};

export default RegisterationPage;
