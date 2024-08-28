const statusColor = {
  green: {
    background: "#1F2C3F",
    color: "#33D69F",
  },
  orange: {
    background: "#2B2736",
    color: "#FF8F00",
  },
  white: {
    background: "#292C45",
    color: "#DFE3FA",
  },
};

const { green, orange, white } = statusColor;

export const statusPayment = (item) => {
  return item?.status === "paid"
    ? green
    : item?.status === "pending"
    ? orange
    : item?.status === "draft"
    ? white
    : null;
};

export const transformData = (date) => {
  const dateForm = new Date(date);
  return dateForm.toString().slice(0, -46);
};
