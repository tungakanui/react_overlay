import { Box } from '@mui/material';
import { Stage, Layer } from 'react-konva';
import './App.css';
import OriginImage from './features/counter/overlay/OriginImage';
import FilterViaCanvasImage, { CanvasProp } from './features/counter/overlay/OverlayImage';

const damages: Array<CanvasProp> = [
  {
    "class": "Pa vô lê",
    "class_uuid": "pavole-trai-tEm7AB",
    "location": "Trái",
    "score": 0.9962571859359741,
    "box": [
      0.7005208333333334,
      0.799074074074074,
      0.9994791666666667,
      0.850925925925926
    ],
    "mask_path": "mBoELCbQbNn8cL_w-LfAT.png",
    "is_part": true,
    "car_part_name": "Pa vô lê trái",
    "rawLocation": "Trái",
    "car_part_color": "#8DA4A6",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/mBoELCbQbNn8cL_w-LfAT.png?Expires=1676529849&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvbUJvRUxDYlFiTm44Y0xfdy1MZkFULnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg0OX19fV19&Signature=ElBhdCS8MMsWwIyOH2k~BHRiV-EDlKK4KvOwru-~efRYMXhXEztMHI9a17lFoQ3PEQjtein6Ay6oir86xvXflFcUaAKed0mby7tkgQV8RZEeRA7gPzwGT15YmYzSi61mSEp5Hacbrj54fJA2FXpfMtWxY7JK3l~A5yG-G8ISvIaoWMf1b7vBiSOr~U5EMUaSj8i8pP2W3VtLyCEFjFK7NeQD4VyDfUy-NFX6LRYvLwPqz1D7VWSiyXqRowY9ltqlI2OFdP277pGmmakVaVcruWc3ga4epIAtAXjMmORyhRqsxTgEsUY0Mxwl7h6XUIq7dMJuJEnt0637EAfIiv0Low__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Ba đờ sốc trước",
    "class_uuid": "ba-do-soc-truoc-WUBZvD",
    "location": "Trước",
    "score": 0.9970483183860779,
    "box": [
      0.1953125,
      0.19814814814814816,
      0.40572916666666664,
      0.825
    ],
    "mask_path": "zxwVbSCWMFNdhsqJw4ogH.png",
    "is_part": true,
    "car_part_name": "Ba đờ sốc trước",
    "rawLocation": "Trước",
    "car_part_color": "#E4804E",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/zxwVbSCWMFNdhsqJw4ogH.png?Expires=1676529849&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvenh3VmJTQ1dNRk5kaHNxSnc0b2dILnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg0OX19fV19&Signature=Gn8rZzHqrXen1nCujNDvH3ANELH3idPxnv~TUtLJv2jVr51cNSP76-riyt54~tG66Eu9YjzWgqopb8y6jjhezUmjiQJVZbI0HIsAFxHVYTorUTDwbCvJJJ0EOyAAdkEmB1uotbnP8QxhIwo0flBnK8v1s2fBv9dA5juL~lBDkUfbdsHIFHTetNPy47gziUmldr0d56bPtCP6fazd3obLGuglfHlUhyTAjIcLcvXjhuH899FDiKP27vCBs7guKsyPOHmuh~phlbwxCvAA1KOaFmp8wNnfduCovtP8YR~57mfPa-DB~F1v9NZ8MgQfGNoF9rDHEIXiAywVAyYWO4j3qA__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Lốp (vỏ) xe",
    "class_uuid": "lop-xe-truoc-trai-616qm8",
    "location": "Trái - Trước",
    "score": 0.999866247177124,
    "box": [
      0.340625,
      0.5518518518518518,
      0.6161458333333333,
      0.9740740740740741
    ],
    "mask_path": "ECFduEOeSNU1hL-5skiHE.png",
    "is_part": true,
    "car_part_name": "Lốp xe trước trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#DCA97D",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/ECFduEOeSNU1hL-5skiHE.png?Expires=1676529849&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvRUNGZHVFT2VTTlUxaEwtNXNraUhFLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg0OX19fV19&Signature=kWORTvNQJIT5-qpkpCe9HOJudgk2g1aN2ymZvos6D~3sckva8uq7LQjaYRLCaVaTC1lCcGNpeTrf73nh0Rd0ymi3DS6i~2bowYPBtbBJ~z7yYuu0EnjPpva~BPiltg2HNhOu-lGXcdBCzMycrnaVOybPQFo57y-CvEsm~uE-IJv71L~CBwXm8FsMI0Hy054P4bGtPAP2d3QCsLaGAIX7~UigmLqscgganPEjCxpCEUHDdjCBo2Jx9p-N0e7UcSZYgWnFxYPNdqZYtWeCERJbqbNFRK8S6Ww6Ku2ASiSgLSS2MrObXMn4Sey3MsM5TbQGivJC1CUmWv-k3F0gC5GF8Q__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Trụ kính cánh cửa",
    "class_uuid": "khung-kinh-canh-cua-truoc-trai-KMtJpH",
    "location": "Trái - Trước",
    "score": 0.8562362194061279,
    "box": [
      0.8161458333333333,
      0,
      0.9994791666666667,
      0.20462962962962963
    ],
    "mask_path": "VHjyvaXLtbaLfDr_EoOGE.png",
    "is_part": true,
    "car_part_name": "Khung kính cánh cửa trước trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#21E0C1",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/VHjyvaXLtbaLfDr_EoOGE.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvVkhqeXZhWEx0YmFMZkRyX0VvT0dFLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=fOf2Yw1yxVy2Jq5i8BpYr~yOL2KZSop8UeV9rNM9lK310bOUmOs7EMiPjEsUoxf-HQBpS-hirSrLUGrIu4moTPK7W48Nkia2gP2Id4nx~vzd5LIC05225OXRa3-fgz8lgwCEdhoCXMmQoNQ4WwoQI3htLAmZvfwERgJjV3p-huQjRqR4BGkfo-gs48VQaezvLcNMajIn-fA1RCROg2g58uJTxp6sgsIV4Rdt0Cv1X0T0451QWNTmLBApz-epzKXEtO3ElB1NACK2ILYTaSkkRpDbHdiQb~xkfHbd6cybPE3DGmrB-maOgiWmG7-ISkaXyHBvvqepmp21n7EREr5MMA__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Kính chắn gió trước",
    "class_uuid": "kinh-chan-gio-truoc-c944fF",
    "location": "Trước",
    "score": 0.9965143799781799,
    "box": [
      0.46510416666666665,
      0,
      0.7223958333333333,
      0.12777777777777777
    ],
    "mask_path": "eib9GgTIKiQ1mC-wMt0A_.png",
    "is_part": true,
    "car_part_name": "Kính chắn gió trước",
    "rawLocation": "Trước",
    "car_part_color": "#1C39F0",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/eib9GgTIKiQ1mC-wMt0A_.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvZWliOUdnVElLaVExbUMtd010MEFfLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=Vhr3CLlstXywjrFU4UykdQrxuZU~yL305ZwwZbrdRv6lReugEz8K8d0CBYNNe1FdN0a0eaw42yFmzDbtdXDCeQz~ceMY2GOVwVqQXb-gQwNrwmlfsjVdrg8PfKXhL91CueD8KAfs276FLmUMUrZyqJnFFwZrtlscoN09nf8QxDnPEf42wN~dGJLo3X9QySjmoj27~8lPimRpnd7GL-HPv8FGNGnNMkkHmd4tqv84smheO6EHM2AmmlxTAQvjfnoyyknIniAOFEt3MdflLitC~PpDXxu9MFBgELvxp6Amje7eTq1CaFml7~slvxnW21en0sq8QlJGMQTzjbhflA6lxA__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Cụm đèn trước",
    "class_uuid": "den-pha-truoc-trai-JhAvx1",
    "location": "Trái - Trước",
    "score": 0.9992871880531311,
    "box": [
      0.24270833333333333,
      0.17222222222222222,
      0.46822916666666664,
      0.37592592592592594
    ],
    "mask_path": "4Y_rUDXSACfuFGS1t969c.png",
    "is_part": true,
    "car_part_name": "Đèn pha trước trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#038171",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/4Y_rUDXSACfuFGS1t969c.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvNFlfclVEWFNBQ2Z1RkdTMXQ5NjljLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=DzHBFVQ50dL8vd8HMTY7~PuRlTf3a66Xt0O7CZRCahnJWRtc0HJcE0Bx-vtM~F2hI~5LkACjVWmfnM1nwAkwnn5pyTcmL2s9wwFbCvL3CqSs5iSXrNctk4QYTZc8nH4keDVk33BtlBl913Mx6qTTu~P2XPQdC-dlRPW4dFQOD2X38nU6U-wesARxldsnY34NM4XQv7CdLlM9A3DVPxdDiotcFc9lQH7kCv7TGb4FZRHvlLR~P1x8Hy6G2m~f4XsKvfxZfdsqQ4M2dDcSazGfZvT1Gyb82gZPPaRqhyW9zO15Px0xvOBiuBJ~705uBnbcUgBOsX11QhLV29YtLhEM8g__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Ca pô trước",
    "class_uuid": "capo-truoc-kdn60v",
    "location": "Trước",
    "score": 0.9989932179450989,
    "box": [
      0.25625,
      0.002777777777777778,
      0.5364583333333334,
      0.2222222222222222
    ],
    "mask_path": "RIHOvEuTl_02PREdooyaN.png",
    "is_part": true,
    "car_part_name": "Ca pô trước",
    "rawLocation": "Trước",
    "car_part_color": "#5ACE67",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/RIHOvEuTl_02PREdooyaN.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvUklIT3ZFdVRsXzAyUFJFZG9veWFOLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=ZoLQPo31~wieMOIvIHxQJUN71-AL6rXE8ja9LgtteZjWz0j9mgjeFOjS7MYYVBjd83XiP0Q-SOjhYINVtUGcnX7UwUfKzKZ2MD~IMr2ZFmc7YtV2GrIlmQCWVI1vuYd-iDGd7T8l2GDcATon3kTmmzv~7M4Jtjw4elr7Wuunzmw2PMb7o~tE7vuJPChJtUGI9yLcbFAt7lZSlgpmLnCv~KI0LbR1C4ZiIJ2IoSx9vo5zm0GAmAVqxklE853TaFx3Se7~RLTI4MpA2KB5y0cDoC0XxQ5-HXDZdggfBGIu~bxzCICC7RPdsEe7BZQrVIjJaK9Gvmdewmn06wSTWS5nBQ__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Cánh cửa",
    "class_uuid": "canh-cua-truoc-trai-9iR4GT",
    "location": "Trái - Trước",
    "score": 0.9994630217552185,
    "box": [
      0.675,
      0.2074074074074074,
      1,
      0.8138888888888889
    ],
    "mask_path": "ZSfH2xTqhAlIe4dKM3k7Z.png",
    "is_part": true,

    "car_part_name": "Cánh cửa trước trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#B848F6",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/ZSfH2xTqhAlIe4dKM3k7Z.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvWlNmSDJ4VHFoQWxJZTRkS00zazdaLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=Ye1R8pjwDkborPLrBspMmDI1bxcwtGe-d-PlRj3BMxUp4ThOaMO9QY~BkZMXSfd5yRmNmDAhV9xHC5pFc~FF6oI0onQNXv7C3N~3o2P1HXIAnDv8Xmh1WbmnkX3mPFnui60YySF5oBzZ34gbaCGMe5RZSD7z1j1zdyB~Rd1wBS1HS7Udr6Fny1cW4eYLpBL6T6pI-cYNHQp9pKv68r-WKFH5YBdVCJ56j1stsJSYD1ag6xBIbjOoqT3OYp3bMQyrbwLSsWPFk0OgJC73No9GVe7nBoxS6-xjOis2nmvH4WaTC--ENDiJewGPKwz-7F7F7eijsLDuRRz2rDce~mlv-w__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Vỏ gương (kính) chiếu hậu",
    "class_uuid": "vo-guong-chieu-hau-trai-P6gwXA",
    "location": "Trái - Trước",
    "score": 0.9996227025985718,
    "box": [
      0.7588541666666667,
      0.046296296296296294,
      0.9192708333333334,
      0.19814814814814816
    ],
    "mask_path": "ahIIHdW8Bz9vexb-7eNqf.png",
    "is_part": true,

    "car_part_name": "Vỏ gương chiếu hậu trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#F24E7A",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/ahIIHdW8Bz9vexb-7eNqf.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvYWhJSUhkVzhCejl2ZXhiLTdlTnFmLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=Vt7H-jRHQS1DuRt5q4KRb8WJSnoImXgvzySS-D12vPR8xlGPGeGX0WVOY0-GtPaFFu6~9fjGhQye55d9oZrtDNNj5U54ckE3twF1YbXGD1qLnOzfhWxiv7uhYb-gipqdHfdVYWkLVAHzqyDYauFHJjbR6A9YiSS0x5kzdVq4e6r-xWi-65vbDba6j2izq3rbu1q0jwEM78X7Cq8OEtYmra1BfbU~-cnPeVr0IwP~UDS5RRN~ivUs1HSt7r5AoodgIhSO9I7sGSjqGFTWL5PFvHuZukwIBM~uYsEh2eh61AlzidnRNo0xmliBHpxCQ9Qp05dV245iZRogw0nc73gTgg__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Chân gương (kính) chiếu hậu",
    "class_uuid": "chan-guong-chieu-hau-trai-rHLSe6",
    "location": "Trái - Trước",
    "score": 0.9948223829269409,
    "box": [
      0.7046875,
      0,
      0.825,
      0.24537037037037038
    ],
    "mask_path": "6j71MbVmiczM-tr0NJkZu.png",
    "is_part": true,

    "car_part_name": "Chân gương chiếu hậu trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#C14EB3",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/6j71MbVmiczM-tr0NJkZu.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvNmo3MU1iVm1pY3pNLXRyME5Ka1p1LnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=D9iqxRcOUna9hKgV-CY~ohrgTBGjDebEx7Pwx6dOUjeBpuXAUJ8EoT8-VnU6aUvSTedyUc2c4sh5FP3WS7MI1zTHaYbRq6lfwCw~ffPpxFyYl0c1suKJryZVoCnhZG-jwi4Ay3dV0DW66ho4VP34Ua0zethoxMnkFfhBcyrl5swrbksqF9iFzHMiuV6tmewEwCfBIWPyRI~IGPjqUwyKNlwR8caWceDdqpE~GCxygalFJfp8HM5RbjdoWN71oE5dI793Qwjz~6jXmvl6aqp33eW84qgPuw~e-8LEKyBGO0e89d-eJ3PJGHWPGVh9E36hg6n77ovOg83k5jIa-C4Kxw__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Trụ kính trước",
    "class_uuid": "tru-kinh-truoc-trai-nXT2oM",
    "location": "Trái - Trước",
    "score": 0.9943994879722595,
    "box": [
      0.6364583333333333,
      0,
      0.7942708333333334,
      0.1537037037037037
    ],
    "mask_path": "qKdfOZGzB3CnzspZ9ells.png",
    "is_part": true,
    "car_part_name": "Trụ kính trước trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#F4C7E2",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/qKdfOZGzB3CnzspZ9ells.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvcUtkZk9aR3pCM0NuenNwWjllbGxzLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=augs0hfj6-n-vu6KA8p2ggx3I2RuV65nCITQ6UfShoHy4oJBIHd0qj8jca-dIP2COmeaYkJIOoAUwjVG-aP5~a7vxBQPv6XJi4zZLCU2ZoHl3fNJ302VuVAQt6ABTzkaBbjkhc87Bpb8BGZWGZYRGkxO07z1bOlbYDnf-QvcibxSQ4N-d4DoXlWsJDZP1LzNgVLFq5iywtcGaGdAZJt6xphh-o5WrUpAn6obqcfWppI8PDh7b5rnJzPA3dEWSPdK7VHI2MXH780RxIdXzXF9st2pkU5nRxTTPfdXMNkf6Bg9mC1WAqGagXUa6RiAez4QxTsJqZTC18Ef1d-b8hjIsA__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "La giăng (Mâm xe)",
    "class_uuid": "la-giang-truoc-trai-9voC2P",
    "location": "Trái - Trước",
    "score": 0.9967073202133179,
    "box": [
      0.378125,
      0.662962962962963,
      0.5734375,
      0.9416666666666667
    ],
    "mask_path": "3i5c81VWucvLb4_YoFo8w.png",
    "is_part": true,
    "car_part_name": "La giăng trước trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#44A335",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/3i5c81VWucvLb4_YoFo8w.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvM2k1YzgxVld1Y3ZMYjRfWW9Gbzh3LnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=HNDuUUYWs-ZgqfyazrM~idGGe~Hpc0wchmaMQPLzkklVvzJmk4qwAHMxUoBrj37WSfcQv2NQcFP7oQYF6u8RArZFiLF4jn1SNwcf~gtbzfT6Yw4apVZyEAYg6DJNt5SzwsCJY6-7E-LiOiwnBm9OoVzZO4grhHMS9FZ9jSAtnFtb2-TAk8d~vrgpQKLbGUYANUMvDQizmASXOIbSBfImm803y4XiM3POnyBZwfMEwN~923JHefl4cbUpsO9nKEZ~BgIyVcbY6mcrYSGDOOT208mK-U2xnBSDmsE~c4qLhx1xlFis8GMtrbpLmlCwTk6VzC7ju6yC9mzBcYBTp0yFLw__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Nẹp kính cánh cửa",
    "class_uuid": "nep-kinh-canh-cua-truoc-trai-DDQeWU",
    "location": "Trái - Trước",
    "score": 0.9591134786605835,
    "box": [
      0.8713541666666667,
      0.19444444444444445,
      0.9994791666666667,
      0.225
    ],
    "mask_path": "nN-RHgjb_f2B0eQtFSdVC.png",
    "is_part": true,
    "car_part_name": "Nẹp kính cánh cửa trước trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#9D6DC4",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/nN-RHgjb_f2B0eQtFSdVC.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvbk4tUkhnamJfZjJCMGVRdEZTZFZDLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=iRuvhW35RTs1QiIRs8eCVhff1dLoIaFLaMgHGbDrVsFl~OAP69vX71WPAlsLuSkWVPDViZpNgW-F54Py86Y9~lX2rxvXbzj50jzWlg8VHLkSyz0D4OBmxCU6ROUcvN28TqNOKwBTEJegllzTbpujwZ5hMas~SoBu0ZKIwclNunPuxIZVqeYkjNgh8XLZnj~9odWmyCod9zNjV6gPxnotnG4YFY6YRu1GT0N-gq~hwFOQlZskg~oAiMCT5Ba2QPM7~w6mKBYc-Bur8t5mOl0BGf5tJp77P4T9mIWnt7dACr3rSHuOuTZEcgkUpmJ7h-ViYSGvKnXtLaYT7gbIORavNg__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Tai (vè trước) xe",
    "class_uuid": "ve-truoc-xe-trai-0xfpED",
    "location": "Trái - Trước",
    "score": 0.999645471572876,
    "box": [
      0.33177083333333335,
      0.09166666666666666,
      0.70625,
      0.8324074074074074
    ],
    "mask_path": "_mMUwTP-32c-WLW1G4Pq3.png",
    "is_part": true,

    "car_part_name": "Vè trước xe trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#FF9503",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/_mMUwTP-32c-WLW1G4Pq3.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvX21NVXdUUC0zMmMtV0xXMUc0UHEzLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=HboNMCwhEMT1x3yVnMbMOOsfE8dg8JcEXmQDSQc9yTdT2mqTtl2URyOHwTcbVaeMMJdQz99~klXz7Jm1yOS-ML8HAPcFIAUDGaQ1Ax5wtXdO18gt07uHzvdplzd7CPLW-xtF3BhtJYmKoG6w7UonzGgF0n~d2os~noA~sMvFZW3gjUdtkESJlD8~RuZRP3fJf8ZTEoQIjyQnyEC5JCdl15BR~NquKFW2XmM8CKirq7Mys9b9Y8eCaU9JDFM7HSfrh~wtk1RlpoAiLQoI36MQ8a9Q-6uTV1SVoIWPB6GtdQwxHG6TNYNOLdGslyTedwzXEDb2NrMmhwQDyF7ZhwTChw__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Ốp đèn  gầm",
    "class_uuid": "op-den-gam-truoc-trai-d5SkUu",
    "location": "Trái - Trước",
    "score": 0.9832773804664612,
    "box": [
      0.22291666666666668,
      0.5046296296296297,
      0.23802083333333332,
      0.6425925925925926
    ],
    "mask_path": "g0pWzYaP11PZ-ofo923QH.png",
    "is_part": true,
    "car_part_name": "Ốp đèn gầm trước trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#579E61",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/g0pWzYaP11PZ-ofo923QH.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvZzBwV3pZYVAxMVBaLW9mbzkyM1FILnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=BOD5irb3oJD98aSkeH0dvneAbXn2cnDAiFlvJXO3IMryivSjLKmbPLM5K6CKJpYXBbWe4awpAjbzDr-O~6C-VDhZdOIJeQ7XvdqmeJt6Rgclidf1YxRQVWvZo3CkVZCU~pnBvCZLJhQbOHUa7KelhKvMxd3I0L56nhr3LR3PDrwSeNXv8EeqTy8XJt8x7sRZjUTndNZ8rdObqoYzDOPkTCaF33z-UU9sQd4tBSJel79LKNZagrGD--ZXeUTlLQ~4hMT~sJDt9Vkxjb2kBcpKraVKgffqAkJs4EmwIUBxhDmD0BqG8NMQvtDvvQ3x2TGKKDwbYcYIY8C7SoaCMwc5tw__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  },
  {
    "class": "Kính cánh cửa",
    "class_uuid": "kinh-canh-cua-truoc-trai-oIYtfW",
    "location": "Trái - Trước",
    "score": 0.9045875072479248,
    "box": [
      0.8203125,
      0,
      0.9994791666666667,
      0.19907407407407407
    ],
    "mask_path": "CdvGVLC1px9hcBP_S1RkM.png",
    "is_part": true,
    "car_part_name": "Kính cánh cửa trước trái",
    "rawLocation": "Trái - Trước",
    "car_part_color": "#CEC9F9",
    "mask_url": "https://dyta7vmv7sqle.cloudfront.net/INSURANCE_RESULT/CdvGVLC1px9hcBP_S1RkM.png?Expires=1676529850&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRV9SRVNVTFQvQ2R2R1ZMQzFweDloY0JQX1MxUmtNLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3NjUyOTg1MH19fV19&Signature=ZCoLFIZA6QR4J4kTmq24dsvL2Yk~t-2MBU3R29rOitIkvWzByYJhMkNGasa7trca9XnIshtvDbvgufpHdJze7ND~HYFt-PPxSFaL01SvIOsM4fDkJsyUXD6qDH7~DmubPH8kfa5AFWO3bTyequNAVXj7G~BhhZgZbtPIln-LTlVGKp9OoASlcVqBn3QPLC3NXuUaN4T7QkX~h7xfH304~Btxf9bGlhygIyX57~t4blkAsLCYPQ3LOO6O0kHbxM-pyWPzOk7pG-MAgNKkmriZAjdi69j2lKQutMnoMnLB1wr7y3FU8EtpY9wPhnfzB-P2z8tyQECdtsfd0LnzleLRfA__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"
  }
];

function App() {
  return (
    <Box bgcolor={"#000000"} width={2000} height={2000}>
      <Stage width={1600} height={1200}>
        <OriginImage url={"https://dyta7vmv7sqle.cloudfront.net/INSURANCE/1666145614576/1666145614447.jpg?Expires=1676529843&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9keXRhN3ZtdjdzcWxlLmNsb3VkZnJvbnQubmV0L0lOU1VSQU5DRS8xNjY2MTQ1NjE0NTc2LzE2NjYxNDU2MTQ0NDcuanBnIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjc2NTI5ODQzfX19XX0_&Signature=gz8jfqePPPDgd9~nuNGiQpGRNkbB6TJblvKCusYDxlcvKafx3Lr7oUEzTdY-ZXryAkaHVVy32rMWuVm9jo1CPnbaf29sRe1pIAlwvDXUAdhLjsF0B4OPI87B7C~0rCKVhoqNdmHnMED-d6HR6m20k0AWtsBuVl5bxAwozQM8uFlUXxutrZ7hv9s1JaODKOCmbub0I4WJLhjGZ4J4hBJzvKCFaEsjU7UZHJP7HG1RUE9A~MGJhx3gljBBsZlvpybII~LD7ehFW0M3X-4mRB0XyZ~sefwy-XkIDB8GEARu4G6YmzhDl4AmGFnBSdhjvpdqq0EMVOX5ZxDz8n~8YBl5DA__&Key-Pair-Id=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApq6RrV2CurW3jjGnyMOr%0A2o0RQq7HcgWjA52QTOhreyh8wOb7rw%2B74v4G%2FyBFVLuEm2o%2Bwvv9wB%2FXiyNJNzf%2F%0AAsaCnymirBEsi3v2jsx%2FNuwHFb9a9hzYAJo7JjjePi%2BLtMiwSnYzSnHXtptGqSJV%0AJl%2FtPuPOg93Nfjds2CqDRZTmqkfU7Pwoq7RoNV202eRk6RThB12q1nAt1%2BF99tI%2F%0APkGo%2BxJdFcVSb4tXy2LcbjNVt9RWamH3ByQaviFC7Jr2XP8kvQR%2FVAhgiXE6vodJ%0AcEu8SC5QWuMefRnz5eO5rkBFgZnA9xbNUNCn0p1Gxl8pKr%2BgNqjvcR7SlBj2lLsk%0A%2BwIDAQAB%0A-----END%20PUBLIC%20KEY-----"} />
        {damages.map((damage) => <FilterViaCanvasImage props={damage} />)}

      </Stage></Box>
  );
}

export default App;

{/* <Stage width={window.innerWidth} height={window.innerHeight}> */ }