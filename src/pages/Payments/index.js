import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Input,
  Button,
  SelectBox,
  List,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const PaymentsPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
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
                  src="images/img_group2_3.svg"
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
                  onClick={handleNavigate6}
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
                    src="images/img_refresh_2.svg"
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
                  Payments
                </Text>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-poppins font-semibold p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] placeholder:text-black_901 text-black_901 w-[100%]"
                  wrapClassName="2xl:ml-[270px] 3xl:ml-[324px] flex lg:ml-[210px] w-[50%] xl:ml-[240px]"
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
            <Column className="bg-gray_50 lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius12 w-[100%]">
              <Text className="font-bold 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                Payments
              </Text>
              <Row className="ml-[3px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] pb-[1px] w-[51%]">
                <SelectBox
                  className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_800 w-[29%]"
                  placeholderClassName="text-gray_800"
                  name="entries"
                  placeholder="Show 9 Entries"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_volume.svg"
                      className="lg:w-[7px] lg:h-[9px] lg:mr-[8px] xl:w-[8px] xl:h-[10px] xl:mr-[9px] 2xl:w-[9px] 2xl:h-[12px] 2xl:mr-[11px] 3xl:w-[10px] 3xl:h-[14px] 3xl:mr-[13px]"
                      alt="volume"
                    />
                  }
                  size="sm"
                ></SelectBox>
                <Text className="font-semibold lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                  Filter By:
                </Text>
                <SelectBox
                  className="font-semibold mb-[1px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_800 w-[21%]"
                  placeholderClassName="text-gray_800"
                  name="channel"
                  placeholder="Channel"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_volume.svg"
                      className="lg:w-[7px] lg:h-[9px] lg:mr-[9px] xl:w-[8px] xl:h-[10px] xl:mr-[10px] 2xl:w-[9px] 2xl:h-[12px] 2xl:mr-[12px] 3xl:w-[10px] 3xl:h-[14px] 3xl:mr-[14px]"
                      alt="volume"
                    />
                  }
                  size="sm"
                  variant="OutlineGray401"
                ></SelectBox>
                <Button
                  className="font-semibold mb-[1px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[13%]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="OutlineGray401"
                >
                  Status
                </Button>
                <Button
                  className="font-semibold mb-[1px] ml-[4px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[13%]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray50"
                >
                  Reset
                </Button>
              </Row>
              <Row
                className="bg-cover bg-repeat ml-[4px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[57%]"
                style={{ backgroundImage: "url('images/img_group241.svg')" }}
              >
                <Text className="font-semibold lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] my-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                  No.
                </Text>
                <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] my-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                  Date
                </Text>
                <Text className="font-semibold 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[92px] my-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                  Amount
                </Text>
                <Text className="font-semibold lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] my-[1px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                  Channel
                </Text>
                <Text className="font-semibold mb-[2px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                  Destination
                </Text>
                <Text className="font-semibold mb-[2px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                  Action
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] ml-[4px] w-[57%]"
                orientation="vertical"
              >
                <Row
                  className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                >
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    10th June 2022
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    KES 1,0000
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Mpesa
                  </Text>
                  <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    0701 000 000
                  </Text>
                  <Button
                    className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    variant="OutlineTealA400"
                  >
                    View{" "}
                  </Button>
                  <Button
                    className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="flex items-center justify-center"
                      alt="trash"
                    />
                  </Button>
                </Row>
                <Row
                  className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                >
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    10th June 2022
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    KES 1,0000
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Mpesa
                  </Text>
                  <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    0701 000 000
                  </Text>
                  <Button
                    className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    variant="OutlineTealA400"
                  >
                    View{" "}
                  </Button>
                  <Button
                    className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="flex items-center justify-center"
                      alt="trash One"
                    />
                  </Button>
                </Row>
                <Row
                  className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                >
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    10th June 2022
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    KES 1,0000
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Mpesa
                  </Text>
                  <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    0701 000 000
                  </Text>
                  <Button
                    className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    variant="OutlineTealA400"
                  >
                    View{" "}
                  </Button>
                  <Button
                    className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="flex items-center justify-center"
                      alt="trash Two"
                    />
                  </Button>
                </Row>
                <Row
                  className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                >
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    10th June 2022
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    KES 1,0000
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Mpesa
                  </Text>
                  <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    0701 000 000
                  </Text>
                  <Button
                    className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    variant="OutlineTealA400"
                  >
                    View{" "}
                  </Button>
                  <Button
                    className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="flex items-center justify-center"
                      alt="trash Three"
                    />
                  </Button>
                </Row>
                <Row
                  className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                >
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    10th June 2022
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    KES 1,0000
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Mpesa
                  </Text>
                  <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    0701 000 000
                  </Text>
                  <Button
                    className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    variant="OutlineTealA400"
                  >
                    View{" "}
                  </Button>
                  <Button
                    className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="flex items-center justify-center"
                      alt="trash Four"
                    />
                  </Button>
                </Row>
                <Row
                  className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                >
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    10th June 2022
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    KES 1,0000
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Mpesa
                  </Text>
                  <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    0701 000 000
                  </Text>
                  <Button
                    className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    variant="OutlineTealA400"
                  >
                    View{" "}
                  </Button>
                  <Button
                    className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="flex items-center justify-center"
                      alt="trash Five"
                    />
                  </Button>
                </Row>
                <Row
                  className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                >
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    10th June 2022
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    KES 1,0000
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Mpesa
                  </Text>
                  <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    0701 000 000
                  </Text>
                  <Button
                    className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    variant="OutlineTealA400"
                  >
                    View{" "}
                  </Button>
                  <Button
                    className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="flex items-center justify-center"
                      alt="trash Six"
                    />
                  </Button>
                </Row>
                <Row
                  className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                >
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    10th June 2022
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    KES 1,0000
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Mpesa
                  </Text>
                  <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    0701 000 000
                  </Text>
                  <Button
                    className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    variant="OutlineTealA400"
                  >
                    View{" "}
                  </Button>
                  <Button
                    className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="flex items-center justify-center"
                      alt="trash Seven"
                    />
                  </Button>
                </Row>
                <Row
                  className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                >
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    10th June 2022
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    KES 1,0000
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Mpesa
                  </Text>
                  <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    0701 000 000
                  </Text>
                  <Button
                    className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    variant="OutlineTealA400"
                  >
                    View{" "}
                  </Button>
                  <Button
                    className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="flex items-center justify-center"
                      alt="trash Eight"
                    />
                  </Button>
                </Row>
                <Row
                  className="bg-cover bg-repeat my-[0] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                >
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    1
                  </Text>
                  <Text className="font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    10th June 2022
                  </Text>
                  <Text className="font-normal lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    KES 1,0000
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    Mpesa
                  </Text>
                  <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                    0701 000 000
                  </Text>
                  <Button
                    className="font-semibold lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder5"
                    variant="OutlineTealA400"
                  >
                    View{" "}
                  </Button>
                  <Button
                    className="flex lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="flex items-center justify-center"
                      alt="trash Nine"
                    />
                  </Button>
                </Row>
              </List>
              <Line className="bg-gray_400_87 h-[1px] ml-[4px] w-[57%]" />
              <Text className="font-normal lg:mb-[110px] xl:mb-[126px] 2xl:mb-[142px] 3xl:mb-[170px] ml-[4px] lg:mt-[340px] xl:mt-[389px] 2xl:mt-[438px] 3xl:mt-[525px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_800 w-[auto]">
                Showing 1-9 of 100 entries
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default PaymentsPage;
