import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Input, Button, List, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const EarningsPage = () => {
  const navigate = useNavigate();

  function handleNavigate12() {
    navigate("/withdraw");
  }
  function handleNavigate13() {
    navigate("/withdraw");
  }
  function handleNavigate14() {
    navigate("/withdraw");
  }
  function handleNavigate15() {
    navigate("/music");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center w-[96%]">
          <aside className="w-[24%]">
            <Column className="">
              <Column className="bg-black_901 lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] w-[82%]">
                <Img
                  src="images/img_group2_4.svg"
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
                  onClick={handleNavigate15}
                >
                  <Img
                    src="images/img_music_4.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="music"
                  />
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Music
                  </Text>
                </Row>
                <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[55%]">
                  <Img
                    src="images/img_playlist_4.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="playlist"
                  />
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Payments
                  </Text>
                </Row>
                <Row className="items-end ml-[2px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[53%]">
                  <Img
                    src="images/img_earnings_4.svg"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="earnings"
                  />
                  <Text className="font-normal mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Earnings
                  </Text>
                </Row>
                <Row className="items-end lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[51%]">
                  <Img
                    src="images/img_settings_4.svg"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="settings"
                  />
                  <Text className="font-normal mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="items-end lg:mb-[304px] xl:mb-[347px] 2xl:mb-[391px] 3xl:mb-[469px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[46%]">
                  <Img
                    src="images/img_refresh_3.svg"
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
          <Column className="items-center w-[76%]">
            <header className="w-[100%]">
              <Row className="items-center w-[100%]">
                <Text className="cursor-pointer hover:font-bold font-bold font-dmsans lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Earnings
                </Text>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-poppins font-semibold p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] placeholder:text-black_901 text-black_901 w-[100%]"
                  wrapClassName="2xl:ml-[287px] 3xl:ml-[344px] flex lg:ml-[223px] w-[50%] xl:ml-[255px]"
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
            <Column className="bg-gray_50 items-end lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius12 w-[100%]">
              <Row className="items-end xl:mr-[112px] 2xl:mr-[127px] 3xl:mr-[152px] lg:mr-[98px] mt-[2px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[88%]">
                <Column className="w-[38%]">
                  <Text className="font-bold ml-[2px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                    Withdraw
                  </Text>
                  <Column
                    className="bg-cover bg-repeat justify-end lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_body.svg')" }}
                  >
                    <Row className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[93%]">
                      <Column className="font-poppins lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[69%]">
                        <Text className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                          Net Balance
                        </Text>
                        <Text className="font-semibold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_901 w-[auto]">
                          KES 80,678.45
                        </Text>
                      </Column>
                      <Text className="font-bold font-sfprodisplay lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-white_A700 w-[auto]">
                        Jua Cali
                      </Text>
                    </Row>
                    <Row className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[auto] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[63%]">
                      <Column className="mt-[1px] w-[61%]">
                        <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          Total Earnings
                        </Text>
                        <Text className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 uppercase w-[auto]">
                          KES 200,000
                        </Text>
                      </Column>
                      <Column className="w-[39%]">
                        <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          Withdraw
                        </Text>
                        <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 uppercase w-[auto]">
                          KES 120,000
                        </Text>
                      </Column>
                    </Row>
                    <Button
                      className="font-bold lg:ml-[146px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[39%]"
                      shape="RoundedBorder8"
                      size="md"
                      variant="OutlineWhiteA700"
                    >
                      View More
                    </Button>
                  </Column>
                </Column>
                <List
                  className="lg:gap-[15px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-3 min-h-[auto] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] 2xl:mt-[107px] 3xl:mt-[128px] lg:mt-[83px] xl:mt-[95px] w-[60%]"
                  orientation="horizontal"
                >
                  <Column
                    className="common-pointer bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius22 shadow-bs w-[100%]"
                    onClick={handleNavigate14}
                  >
                    <Button
                      className="flex lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
                      size="mdIcn"
                      variant="icbFillDeeppurpleA400"
                    >
                      <Img
                        src="images/img_user_43X43.svg"
                        className="flex items-center justify-center"
                        alt="user One"
                      />
                    </Button>
                    <Text className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] mb-[3px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_901 w-[62%]">
                      Withdraw to <br />
                      bank
                    </Text>
                  </Column>
                  <Column
                    className="common-pointer bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius22 shadow-bs w-[100%]"
                    onClick={handleNavigate13}
                  >
                    <Button
                      className="flex lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
                      size="mdIcn"
                      variant="icbFillLightblue300"
                    >
                      <Img
                        src="images/img_menu.svg"
                        className="flex items-center justify-center lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px]"
                        alt="menu"
                      />
                    </Button>
                    <Text className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] mb-[3px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_901 w-[62%]">
                      Withdraw to <br />
                      Mobile
                    </Text>
                  </Column>
                  <Column
                    className="common-pointer bg-white_A700 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius22 shadow-bs w-[100%]"
                    onClick={handleNavigate12}
                  >
                    <Button
                      className="flex lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center rounded-radius50 lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
                      size="mdIcn"
                      variant="icbFillGreenA200"
                    >
                      <Img
                        src="images/img_computer.svg"
                        className="flex items-center justify-center"
                        alt="computer"
                      />
                    </Button>
                    <Text className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] mb-[3px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_901 w-[62%]">
                      Withdraw to <br />
                      Wallet
                    </Text>
                  </Column>
                </List>
              </Row>
              <Column className="items-center lg:mb-[14px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[87%]">
                <Row
                  className="bg-cover bg-repeat lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group241.svg')" }}
                >
                  <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] my-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Date
                  </Text>
                  <Text className="font-semibold lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] my-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Amount
                  </Text>
                  <Text className="font-semibold lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] my-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Channel
                  </Text>
                  <Text className="font-semibold lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] my-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Ref
                  </Text>
                  <Text className="font-semibold mb-[2px] 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Destination
                  </Text>
                  <Text className="font-semibold lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] my-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Account
                  </Text>
                  <Text className="font-semibold mb-[2px] lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Action
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:py-[38px] xl:py-[44px] 2xl:py-[50px] 3xl:py-[60px] w-[100%]"
                  orientation="vertical"
                >
                  <Row
                    className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  >
                    <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      10th June
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      KES 1,0000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Mpesa
                    </Text>
                    <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Q12345KLM
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      0701 000 000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      010000
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[8%]"
                      shape="RoundedBorder5"
                      variant="OutlineTealA400"
                    >
                      View{" "}
                    </Button>
                    <Button
                      className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="flex items-center justify-center"
                        alt="trash"
                      />
                    </Button>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_400_87" />
                  <Row
                    className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  >
                    <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      10th June
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      KES 1,0000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Mpesa
                    </Text>
                    <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Q12345KLM
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      0701 000 000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      010000
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[8%]"
                      shape="RoundedBorder5"
                      variant="OutlineTealA400"
                    >
                      View{" "}
                    </Button>
                    <Button
                      className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="flex items-center justify-center"
                        alt="trash One"
                      />
                    </Button>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_400_87" />
                  <Row
                    className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  >
                    <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      10th June
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      KES 1,0000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Mpesa
                    </Text>
                    <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Q12345KLM
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      0701 000 000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      010000
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[8%]"
                      shape="RoundedBorder5"
                      variant="OutlineTealA400"
                    >
                      View{" "}
                    </Button>
                    <Button
                      className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="flex items-center justify-center"
                        alt="trash Two"
                      />
                    </Button>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_400_87" />
                  <Row
                    className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  >
                    <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      10th June
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      KES 1,0000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Mpesa
                    </Text>
                    <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Q12345KLM
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      0701 000 000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      010000
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[8%]"
                      shape="RoundedBorder5"
                      variant="OutlineTealA400"
                    >
                      View{" "}
                    </Button>
                    <Button
                      className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="flex items-center justify-center"
                        alt="trash Three"
                      />
                    </Button>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_400_87" />
                  <Row
                    className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  >
                    <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      10th June
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      KES 1,0000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Mpesa
                    </Text>
                    <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Q12345KLM
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      0701 000 000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      010000
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[8%]"
                      shape="RoundedBorder5"
                      variant="OutlineTealA400"
                    >
                      View{" "}
                    </Button>
                    <Button
                      className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="flex items-center justify-center"
                        alt="trash Four"
                      />
                    </Button>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_400_87" />
                  <Row
                    className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  >
                    <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      10th June
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      KES 1,0000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Mpesa
                    </Text>
                    <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Q12345KLM
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      0701 000 000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      010000
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[8%]"
                      shape="RoundedBorder5"
                      variant="OutlineTealA400"
                    >
                      View{" "}
                    </Button>
                    <Button
                      className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="flex items-center justify-center"
                        alt="trash Five"
                      />
                    </Button>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_400_87" />
                  <Row
                    className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  >
                    <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      10th June
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      KES 1,0000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Mpesa
                    </Text>
                    <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Q12345KLM
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      0701 000 000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      010000
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[8%]"
                      shape="RoundedBorder5"
                      variant="OutlineTealA400"
                    >
                      View{" "}
                    </Button>
                    <Button
                      className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="flex items-center justify-center"
                        alt="trash Six"
                      />
                    </Button>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_400_87" />
                  <Row
                    className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  >
                    <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      10th June
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      KES 1,0000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Mpesa
                    </Text>
                    <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Q12345KLM
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      0701 000 000
                    </Text>
                    <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      010000
                    </Text>
                    <Button
                      className="font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[8%]"
                      shape="RoundedBorder5"
                      variant="OutlineTealA400"
                    >
                      View{" "}
                    </Button>
                    <Button
                      className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="flex items-center justify-center"
                        alt="trash Seven"
                      />
                    </Button>
                  </Row>
                </List>
                <Text className="font-normal lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_800 w-[auto]">
                  Showing 1-9 of 100 entries
                </Text>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EarningsPage;
