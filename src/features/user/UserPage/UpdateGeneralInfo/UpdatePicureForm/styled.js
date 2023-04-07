import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

export const ImageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const AddIcon = styled(AiOutlinePlusCircle)`
  display: block;
  position: absolute;
  font-size: 60px;
  color: #fff;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 160ms ease-in-out;
  cursor: pointer;
`;

export const ShadowBackdrop = styled.div`
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0px 0px 20px 20px rgba(34, 34, 34, 0.43);
  background-color: rgba(0, 0, 0, 0.23);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  transition: opacity 160ms ease-in-out;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #a4a4a4;
  overflow: hidden;

  &:hover ${AddIcon} {
    opacity: 1;
  }

  &:hover ${ShadowBackdrop} {
    opacity: 1;
  }
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FileInput = styled.input`
  display: none;
`;

export const UploadFileButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightTeal};
  transition: color 120ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.darkTeal};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.doveGrey};
    cursor: auto;
  }
`;

export const UploadFileIcon = styled(BiUpload)`
  display: block;
  font-size: 30px;
  height: 100%;
`;
