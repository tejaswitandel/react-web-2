import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Text,
  Row,
  Img,
  Input,
  SelectBox,
  Stack,
  TextArea,
  CheckBox,
  Line,
  Button,
} from "components";

const AddSongModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[38%]"
        overlayClassName="fixed flex h-[100%] inset-y-[0] rounded-radius5 w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] rounded-radius5 w-[100%]">
            <Column className="bg-white_A700 items-center lg:pb-[14px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] rounded-radius5 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]"
                style={{ backgroundImage: "url('images/img_formtitle.svg')" }}
              >
                <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Add Song
                </Text>
              </Column>
              <Row className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[94%]">
                <Column className="w-[36%]">
                  <Img
                    src="images/img_uploadimage.svg"
                    className="xl:h-[113px] 2xl:h-[128px] 3xl:h-[153px] lg:h-[99px] xl:w-[112px] 2xl:w-[127px] 3xl:w-[152px] lg:w-[98px]"
                    alt="uploadimage"
                  />
                  <Row className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[70%]">
                    <Text className="font-semibold mt-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_800 w-[auto]">
                      Upload Image
                    </Text>
                    <Text className="font-semibold mb-[1px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_401 w-[auto]">
                      Remove
                    </Text>
                  </Row>
                </Column>
                <Column className="pt-[4px] w-[64%]">
                  <Column className="rounded-radius4 w-[100%]">
                    <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[auto]">
                      Song Title
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="2xl:h-[31px] 3xl:h-[37px] flex lg:h-[24px] w-[100%] xl:h-[27px]"
                      name="background"
                      placeholder=""
                    ></Input>
                  </Column>
                  <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-black_901 w-[auto]">
                    Select Category
                  </Text>
                  <SelectBox
                    className="mt-[1px] w-[100%]"
                    placeholderClassName=""
                    name="select"
                    placeholder=""
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_mail.svg"
                        className="lg:w-[7px] lg:h-[7px] lg:mr-[10px] xl:w-[8px] xl:h-[9px] xl:mr-[12px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[14px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[16px]"
                        alt="mail"
                      />
                    }
                    variant="OutlineBluegray400"
                  ></SelectBox>
                  <Column className="lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius4 w-[100%]">
                    <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-black_901 w-[auto]">
                      Base Price
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="2xl:h-[31px] 2xl:mt-[5px] 3xl:h-[37px] 3xl:mt-[6px] flex lg:h-[24px] lg:mt-[3px] w-[100%] xl:h-[27px] xl:mt-[4px]"
                      name="background One"
                      placeholder=""
                    ></Input>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[93%]">
                <Column className="w-[53%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-black_901 w-[auto]">
                    Thank You Thumbnail
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="2xl:mt-[5px] 3xl:mt-[6px] flex lg:mt-[3px] w-[89%] xl:mt-[4px]"
                    name="GroupFour"
                    placeholder="Upload Picture"
                    prefix={
                      <Img
                        src="images/img_camera.svg"
                        className="lg:w-[17px] lg:mx-[7px] xl:w-[19px] xl:mx-[8px] 2xl:w-[22px] 2xl:mx-[10px] 3xl:w-[26px] 3xl:mx-[12px] my-[auto]"
                        alt="camera"
                      />
                    }
                    size="sm"
                  ></Input>
                </Column>
                <Column className="mt-[1px] rounded-radius4 w-[47%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-black_901 w-[auto]">
                    Thank You Note
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="2xl:h-[31px] 2xl:mt-[5px] 3xl:h-[37px] 3xl:mt-[6px] flex lg:h-[24px] lg:mt-[3px] w-[100%] xl:h-[27px] xl:mt-[4px]"
                    name="background Two"
                    placeholder=""
                  ></Input>
                </Column>
              </Row>
              <Text className="font-semibold lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-black_901 w-[auto]">
                Type
              </Text>
              <SelectBox
                className="mt-[1px] w-[93%]"
                placeholderClassName=""
                name="selecttype"
                placeholder=""
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_mail.svg"
                    className="lg:w-[7px] lg:h-[7px] lg:mr-[11px] xl:w-[8px] xl:h-[9px] xl:mr-[13px] 2xl:w-[9px] 2xl:h-[10px] 2xl:mr-[15px] 3xl:w-[10px] 3xl:h-[11px] 3xl:mr-[18px]"
                    alt="mail"
                  />
                }
                variant="OutlineBluegray400"
              ></SelectBox>
              <Column className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] rounded-radius4 w-[94%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-black_901 w-[auto]">
                  Terms & Conditions
                </Text>
                <Stack className="lg:h-[63px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[98px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                  <TextArea
                    className="absolute w-[100%]"
                    name="background Three"
                    placeholder=""
                  ></TextArea>
                  <Text className="absolute font-medium h-[max-content] inset-y-[0] lg:leading-[12px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] left-[2%] my-[auto] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_400 w-[82%]">
                    1. I indemnify Solution from any claim, damages, or piracy
                    claim
                    <br />
                    2. Where I’ve used content or IP from another artist, I have
                    sorted out with that artist.
                    <br />
                    3. I indemnify Solution from any claim, damages, or piracy
                    claim
                  </Text>
                </Stack>
              </Column>
              <CheckBox
                className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-teal_A400"
                inputClassName="h-[22px] mr-[5px] w-[22px]"
                name="Iagreetoall"
                label="I agree to all the Terms & Conditions"
                shape="RoundedBorder5"
                size="sm"
              ></CheckBox>
              <Line className="bg-bluegray_900 h-[1.09px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[100%]" />
              <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[94%]">
                <Button
                  className="common-pointer font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[15%]"
                  onClick={props.onRequestClose}
                  shape="RoundedBorder5"
                  size="md"
                  variant="OutlineGray601"
                >
                  Cancel
                </Button>
                <Button
                  className="font-semibold lg:ml-[105px] xl:ml-[120px] 2xl:ml-[136px] 3xl:ml-[163px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[20%]"
                  shape="RoundedBorder5"
                  variant="FillYellowA700"
                >
                  Save Song
                </Button>
                <Button
                  className="font-semibold mb-[1px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[32%]"
                  shape="RoundedBorder5"
                  variant="FillTealA400"
                >
                  Save & Add Another
                </Button>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default AddSongModal;
