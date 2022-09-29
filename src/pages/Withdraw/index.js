import React from "react";

import { Column, Row, Img, Text, Input, Button, Radio, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const WithdrawPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center w-[96%]">
          <aside className="w-[24%]">
            <Column className="">
              <Column className="bg-black_901 lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] w-[82%]">
                <Img
                  src="images/img_group2_5.svg"
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
                <Row className="items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] rounded-radius6 w-[42%]">
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
                    src="images/img_refresh_4.svg"
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
            <Column className="bg-gray_50 justify-center lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 w-[100%]">
              <Text className="font-bold lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                Withdraw Money
              </Text>
              <Row className="font-satoshivariable items-end ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[24%]">
                <Column className="3xl:mt-[114px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[95px] w-[32%]">
                  <Text className="font-medium lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900_90 w-[59%]">
                    Own
                    <br />
                    Mobile
                  </Text>
                  <Radio
                    value="undefined"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] ml-[1px] mt-[4px]"
                    inputClassName="h-[14.05px] mr-[5px] w-[14.05px]"
                    checked={false}
                    name="radiodisabled"
                    label="undefined"
                    variant="FillGray902"
                  ></Radio>
                </Column>
                <List
                  className="lg:gap-[15px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-2 min-h-[auto] w-[68%]"
                  orientation="horizontal"
                >
                  <Column className="border border-bluegray_400_40 border-solid justify-center lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[100%]">
                    <Text className="font-medium font-satoshivariable lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400_71 w-[45%]">
                      Jua
                      <br />
                      Cali
                    </Text>
                    <Text className="font-normal font-poppins mt-[4px] not-italic lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-bluegray_400_71 w-[auto]">
                      0700 000 000
                    </Text>
                    <Radio
                      value="undefined"
                      className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] mb-[1px] ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px]"
                      inputClassName="h-[14.05px] mr-[5px] w-[14.05px]"
                      checked={false}
                      name="radio"
                      label="undefined"
                      variant="FillBluegray40067"
                    ></Radio>
                  </Column>
                  <Column className="border border-solid border-teal_A400 justify-center lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[100%]">
                    <Text className="font-medium font-satoshivariable lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-teal_A400 w-[45%]">
                      Jua
                      <br />
                      Cali
                    </Text>
                    <Text className="font-normal font-poppins mt-[4px] not-italic lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-bluegray_400 w-[auto]">
                      0700 000 000
                    </Text>
                    <Radio
                      value="undefined"
                      className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] mb-[1px] ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      checked={false}
                      name="radioactive"
                      label="undefined"
                    ></Radio>
                  </Column>
                </List>
              </Row>
              <Column className="font-poppins ml-[2px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] rounded-radius5 w-[46%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Mobile Number
                </Text>
                <Input
                  className="w-[100%]"
                  wrapClassName="2xl:h-[43px] 2xl:mt-[12px] 3xl:h-[51px] 3xl:mt-[14px] flex lg:h-[33px] lg:mt-[9px] w-[100%] xl:h-[38px] xl:mt-[10px]"
                  name="rectangle"
                  placeholder=""
                  variant="OutlineBluegray1001_2"
                ></Input>
              </Column>
              <Column className="font-poppins ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius5 w-[46%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_901 w-[auto]">
                  Amount
                </Text>
                <Input
                  className="w-[100%]"
                  wrapClassName="2xl:h-[43px] 2xl:mt-[11px] 3xl:h-[51px] 3xl:mt-[13px] flex lg:h-[33px] lg:mt-[8px] w-[100%] xl:h-[38px] xl:mt-[9px]"
                  name="rectangle One"
                  placeholder=""
                  variant="OutlineBluegray1001_2"
                ></Input>
              </Column>
              <Button
                className="font-semibold lg:mb-[259px] xl:mb-[297px] 2xl:mb-[334px] 3xl:mb-[401px] ml-[2px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[20%]"
                shape="RoundedBorder5"
                size="lg"
                variant="FillTealA400"
              >
                Send
              </Button>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default WithdrawPage;
