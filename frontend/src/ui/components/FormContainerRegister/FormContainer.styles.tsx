import { experimentalStyled as styled } from "@material-ui/core/styles";

export const FormContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: ${({ theme }) => theme.spacing(6)}  auto ${({ theme }) => theme.spacing(7)};
`;

export const FormPostContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(2)};
  }
  width: 2rm;
  margin: ${({ theme }) => theme.spacing(2)}  ${({ theme }) => theme.spacing(8)};
`;

export const FormTitle = styled("h2")`
margin: ${({ theme }) => theme.spacing(4)}  auto ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;