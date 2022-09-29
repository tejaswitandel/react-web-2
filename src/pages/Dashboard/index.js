import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Input, Button, List, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate11() {
    navigate("/music");
  }
  function handleNavigate17() {
    navigate("/earnings");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] w-[100%]">
        <Row className="w-[96%]">
          <aside className="w-[23%]">
            <Column className="">
              <Column className="bg-black_901 lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] w-[84%]">
                <Img
                  src="images/img_group2_85X104.svg"
                  className="3xl:h-[103px] lg:h-[67px] xl:h-[76px] 2xl:h-[86px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[52%]"
                  alt="GroupTwo"
                />
                <Row className="items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[93px] w-[40%]">
                  <Img
                    src="images/img_home.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[25%]"
                    alt="home"
                  />
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Home
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] rounded-radius6 w-[42%]"
                  onClick={handleNavigate11}
                >
                  <Img
                    src="images/img_music_20X20.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="music"
                  />
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Music
                  </Text>
                </Row>
                <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[55%]">
                  <Img
                    src="images/img_playlist_18X18.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="playlist"
                  />
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Payments
                  </Text>
                </Row>
                <Row className="items-end ml-[2px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[53%]">
                  <Img
                    src="images/img_earnings_24X24.svg"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="earnings"
                  />
                  <Text className="font-normal mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Earnings
                  </Text>
                </Row>
                <Row className="items-end lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[51%]">
                  <Img
                    src="images/img_settings_24X24.svg"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="settings"
                  />
                  <Text className="font-normal mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="items-end lg:mb-[304px] xl:mb-[347px] 2xl:mb-[391px] 3xl:mb-[469px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[46%]">
                  <Img
                    src="images/img_refresh.svg"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="refresh"
                  />
                  <Text className="font-normal mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-teal_A400 w-[auto]">
                    Logout
                  </Text>
                </Row>
              </Column>
            </Column>
          </aside>
          <Column className="items-center lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[77%]">
            <header className="w-[99%]">
              <Row className="items-center w-[100%]">
                <Text className="cursor-pointer hover:font-bold font-bold font-dmsans lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Dashboard
                </Text>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-poppins font-semibold p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] placeholder:text-black_901 text-black_901 w-[100%]"
                  wrapClassName="2xl:ml-[257px] 3xl:ml-[308px] flex lg:ml-[199px] w-[50%] xl:ml-[228px]"
                  name="search"
                  placeholder="Search content"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[4px] lg:w-[12px] lg:h-[13px] lg:mr-[14px] xl:w-[14px] xl:h-[15px] xl:mr-[16px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[19px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[22px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[17px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#060124"
                      />
                    ) : inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#060124"
                        className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[17px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcCircleBorder29"
                  size="smSrc"
                  variant="srcOutlineGray30066"
                ></Input>
                <Button
                  className="flex lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  size="lgIcn"
                  variant="icbFillTealA400"
                >
                  <Img
                    src="images/img_clock.svg"
                    className="flex items-center justify-center"
                    alt="clock"
                  />
                </Button>
                <Button
                  className="flex lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  size="lgIcn"
                  variant="icbFillTealA400"
                >
                  <Img
                    src="images/img_user.svg"
                    className="flex items-center justify-center"
                    alt="user"
                  />
                </Button>
              </Row>
            </header>
            <Column className="items-center lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[99%]">
              <Row className="bg-gray_50 items-end justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius12 w-[100%]">
                <Column className="lg:mb-[56px] xl:mb-[64px] 2xl:mb-[72px] 3xl:mb-[86px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[36%]">
                  <Text className="font-bold lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                    My Summary
                  </Text>
                  <Column
                    className="bg-cover bg-repeat justify-end lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[92%]"
                    style={{ backgroundImage: "url('images/img_body.svg')" }}
                  >
                    <Row className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[93%]">
                      <Column className="font-poppins lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[69%]">
                        <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                          Net Balance
                        </Text>
                        <Text className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_901 w-[auto]">
                          KES 80,678.45
                        </Text>
                      </Column>
                      <Text className="font-bold font-sfprodisplay lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-white_A700 w-[auto]">
                        Jua Cali
                      </Text>
                    </Row>
                    <Row className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[auto] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[63%]">
                      <Column className="mt-[1px] w-[62%]">
                        <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          Total Earnings
                        </Text>
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 uppercase w-[auto]">
                          KES 200,000
                        </Text>
                      </Column>
                      <Column className="w-[38%]">
                        <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          Withdraw
                        </Text>
                        <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 uppercase w-[auto]">
                          KES 120,000
                        </Text>
                      </Column>
                    </Row>
                    <Button
                      className="common-pointer font-bold lg:ml-[146px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[39%]"
                      onClick={handleNavigate17}
                      shape="RoundedBorder8"
                      size="md"
                      variant="OutlineWhiteA700"
                    >
                      View More
                    </Button>
                  </Column>
                </Column>
                <List
                  className="gap-[0] lg:mb-[56px] xl:mb-[64px] 2xl:mb-[72px] 3xl:mb-[86px] min-h-[auto] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[32%]"
                  orientation="vertical"
                >
                  <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius15 w-[100%]">
                    <Column className="w-[50%]">
                      <Row className="w-[84%]">
                        <Line className="bg-teal_A700 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[3px]" />
                        <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                          Total Uploads
                        </Text>
                        <Img
                          src="images/img_arrowup.svg"
                          className="lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] w-[5%]"
                          alt="arrowup"
                        />
                      </Row>
                      <Text className="font-bold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-teal_A700 w-[auto]">
                        102
                      </Text>
                    </Column>
                    <Line className="bg-bluegray_50 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[1px]" />
                    <Column className="items-center lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[28%]">
                      <Row className="w-[100%]">
                        <Line className="bg-deep_orange_600 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] w-[3px]" />
                        <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                          Total Likes
                        </Text>
                      </Row>
                      <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-deep_orange_600 w-[auto]">
                        10,400
                      </Text>
                    </Column>
                  </Row>
                  <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius15 w-[100%]">
                    <Column className="lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pt-[1px] w-[46%]">
                      <Row className="justify-between w-[100%]">
                        <Line className="bg-red_A400 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[4px] w-[3px]" />
                        <Text className="font-medium mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                          Total Downloads
                        </Text>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] w-[4%]"
                          alt="arrowdown"
                        />
                      </Row>
                      <Text className="font-bold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_A400 w-[auto]">
                        204,020
                      </Text>
                    </Column>
                    <Line className="bg-bluegray_50 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[1px]" />
                    <Column className="font-sfprodisplay lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[37%]">
                      <Row className="w-[85%]">
                        <Line className="bg-deep_orange_600 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] w-[3px]" />
                        <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 w-[auto]">
                          Total Streams
                        </Text>
                      </Row>
                      <Text className="font-bold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-deep_orange_600 w-[auto]">
                        10,400,654
                      </Text>
                    </Column>
                  </Row>
                </List>
                <Column className="border-2 border-solid border-teal_A400 font-dmsans items-center justify-end lg:mb-[43px] xl:mb-[49px] 2xl:mb-[56px] 3xl:mb-[67px] lg:ml-[138px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[15%]">
                  <Img
                    src="images/img_plus_12X12.svg"
                    className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:w-[31px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                    alt="plus"
                  />
                  <Text className="font-bold lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-teal_A400 w-[90%]">
                    Upload New Content
                  </Text>
                </Column>
              </Row>
              <footer className="bg-black_901 lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius12 w-[100%]">
                <Row className="items-center lg:mb-[31px] xl:mb-[36px] 2xl:mb-[41px] 3xl:mb-[49px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] xl:mr-[102px] 2xl:mr-[115px] 3xl:mr-[138px] lg:mr-[89px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[78%]">
                  <Column className="w-[36%]">
                    <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                      Top Genres
                    </Text>
                    <Line className="bg-gray_700 h-[1px] ml-[4px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[83%]" />
                    <List
                      className="gap-[0] min-h-[auto] ml-[4px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:pr-[40px] xl:pr-[46px] 2xl:pr-[52px] 3xl:pr-[62px] lg:py-[40px] xl:py-[46px] 2xl:py-[52px] 3xl:py-[62px] w-[80%]"
                      orientation="vertical"
                    >
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                    </List>
                  </Column>
                  <Column className="w-[34%]">
                    <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                      Top Genres
                    </Text>
                    <Line className="bg-gray_700 h-[1px] ml-[4px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[86%]" />
                    <List
                      className="gap-[0] min-h-[auto] ml-[4px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:pr-[40px] xl:pr-[46px] 2xl:pr-[52px] 3xl:pr-[62px] lg:py-[40px] xl:py-[46px] 2xl:py-[52px] 3xl:py-[62px] w-[83%]"
                      orientation="vertical"
                    >
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                    </List>
                  </Column>
                  <Column className="w-[30%]">
                    <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                      Top Genres
                    </Text>
                    <Line className="bg-gray_700 h-[1px] ml-[4px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[98%]" />
                    <List
                      className="gap-[0] min-h-[auto] ml-[4px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:pr-[40px] xl:pr-[46px] 2xl:pr-[52px] 3xl:pr-[62px] lg:py-[40px] xl:py-[46px] 2xl:py-[52px] 3xl:py-[62px] w-[95%]"
                      orientation="vertical"
                    >
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                      <Row className="lg:mr-[26px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] my-[0] w-[81%]">
                        <Text className="font-bold mt-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          01
                        </Text>
                        <div className="bg-gray_400 lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                          Genge
                        </Text>
                      </Row>
                    </List>
                  </Column>
                </Row>
              </footer>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardPage;
