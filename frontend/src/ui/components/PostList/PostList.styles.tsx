import { experimentalStyled as styled } from "@material-ui/core/styles";

export const UserInformationContainer = styled("div")`
  display: grid;
  grid-template-columns: 4rm 2fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "name"
    "description";
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
  align-items: center;
`;
export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;
export const TextPost = styled("div")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;
