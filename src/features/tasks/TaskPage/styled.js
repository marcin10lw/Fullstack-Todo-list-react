import styled from "styled-components";

export const TaskPageContent = styled.div`
  padding: 20px;
`;

export const TimePassedInfo = styled.span`
  color: ${({ theme }) => theme.colors.rose};
  margin-right: 10px;
`;

export const TaskDoneInfo = styled.span`
  color: ${({ theme }) => theme.colors.teal};
  font-weight: 700;
`;

export const TaskNotDoneInfo = styled.span`
  color: ${({ theme }) => theme.colors.hibiscus};
  font-weight: 700;
`;
