import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";

export const UpdateFrom = styled.form``;

export const UpdateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  /* gap: 20px; */
`;

export const PhotoWrapper = styled.div`
  max-width: 200px;
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0px 4px 13px #bababa;
  overflow: hidden;

  &:hover {
  }
`;

export const UploadFileInput = styled.input`
  display: none;
`;

export const UploadFileIcon = styled(AiOutlineUpload)``;

export const LabelText = styled.span`
  /* display: block; */
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 15px 0;
  border-bottom: 2px solid hsl(0, 0%, 84%);

  &:focus {
    outline: none;
    border-bottom: 2px solid hsl(0, 0%, 70%);
  }
`;

export const PhotoDummyIcon = styled(FaUserCircle)`
  color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 100%;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
