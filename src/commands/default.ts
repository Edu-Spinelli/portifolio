const createDefault = () : string[] => {
  const defaultMsgArr = [
    "COMMAND NOT FOUND",
    "Type <span class='command'>'help'</span> to get started.",
  ]  
  
  const defaultMsg : string[] = [];
  
  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

export const DEFAULT = createDefault();
