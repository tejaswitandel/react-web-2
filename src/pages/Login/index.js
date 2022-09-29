import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Stack,
  Column,
  Img,
  Text,
  Line,
  PagerIndicator,
  Input,
  Row,
  CheckBox,
  Button,
} from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/");
  }
  function handleNavigate10() {
    navigate("/dashboard");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] mx-[auto] w-[100%]">
        <Column
          className="absolute bg-cover bg-repeat left-[0] w-[95%]"
          style={{ backgroundImage: "url('images/img_group30.png')" }}
        >
          <Column className="bg-black_900_b1 items-center lg:pb-[53px] xl:pb-[61px] 2xl:pb-[69px] 3xl:pb-[82px] w-[58%]">
            <Img
              src="images/img_flare_490X791.svg"
              className="lg:h-[382px] xl:h-[436px] 2xl:h-[491px] 3xl:h-[589px] w-[100%]"
              alt="flare"
            />
            <Text className="font-semibold lg:leading-[42px] xl:leading-[48px] 2xl:leading-[54px] 3xl:leading-[64px] lg:mt-[171px] xl:mt-[196px] 2xl:mt-[221px] 3xl:mt-[265px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-center text-white_A700 w-[41%]">
              Your Content
              <br />
              Market Place
            </Text>
            <Line className="bg-teal_A400 h-[5px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[22%]" />
            <Img
              src="images/img_theonlinecoll.svg"
              className="lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[63%]"
              alt="Theonlinecoll"
            />
            <PagerIndicator
              className="h-[1px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[max-content]"
              count={3}
              activeCss="undefined"
              activeIndex={1}
              inactiveCss="undefined"
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </Column>
        </Column>
        <Column className="absolute bg-white_A700 lg:p-[46px] xl:p-[53px] 2xl:p-[60px] 3xl:p-[72px] right-[0] w-[45%]">
          <Img
            src="images/img_group2.svg"
            className="xl:h-[102px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[26%]"
            alt="GroupTwo"
          />
          <Text className="font-semibold lg:leading-[45px] xl:leading-[52px] 2xl:leading-[59px] 3xl:leading-[70px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[96px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-teal_A400 w-[73%]">
            <span className="text-black_901 font-poppins">
              Boring in the past
              <br />
              We Bring you all
            </span>
            <span className="text-black_900 font-poppins"> </span>
            <span className="text-teal_A400 font-poppins">New!</span>
          </Text>
          <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius5 w-[89%]">
            <Text className="font-semibold ml-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
              Username
            </Text>
            <Input
              className="w-[100%]"
              wrapClassName="2xl:h-[43px] 2xl:mt-[8px] 3xl:h-[51px] 3xl:mt-[9px] flex lg:h-[33px] lg:mt-[6px] w-[100%] xl:h-[38px] xl:mt-[7px]"
              name="rectangle One"
              placeholder=""
              variant="OutlineBluegray100"
            ></Input>
          </Column>
          <Row className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[88%]">
            <Text className="font-semibold mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
              Password
            </Text>
            <Text className="font-normal lg:ml-[210px] xl:ml-[240px] 2xl:ml-[270px] 3xl:ml-[324px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-teal_A400 w-[auto]">
              Forgot Password?
            </Text>
          </Row>
          <Input
            className="w-[100%]"
            wrapClassName="2xl:h-[43px] 2xl:ml-[6px] 2xl:mt-[8px] 3xl:h-[51px] 3xl:ml-[7px] 3xl:mt-[9px] flex lg:h-[33px] lg:ml-[4px] lg:mt-[6px] w-[89%] xl:h-[38px] xl:ml-[5px] xl:mt-[7px]"
            name="rectangle Two"
            placeholder=""
            variant="OutlineBluegray100"
          ></Input>
          <CheckBox
            className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_600"
            inputClassName="h-[22px] mr-[5px] w-[22px]"
            name="Remembermypas"
            label="Remember my password"
            shape="RoundedBorder5"
            size="sm"
          ></CheckBox>
          <Button
            className="common-pointer font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[38%]"
            onClick={handleNavigate10}
            shape="RoundedBorder5"
            size="lg"
            variant="FillTealA400"
          >
            Login
          </Button>
          <Text
            className="common-pointer font-medium lg:mb-[154px] xl:mb-[177px] 2xl:mb-[199px] 3xl:mb-[238px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_A400 w-[auto]"
            onClick={handleNavigate9}
          >
            <span className="text-black_900 font-poppins">
              Don’t have an account?{" "}
            </span>
            <span className="text-teal_A400 font-poppins">Sign Up</span>
          </Text>
        </Column>
      </Stack>
    </>
  );
};

export default LoginPage;
