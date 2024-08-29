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

export const statusPayment = (item) => {
  const { green, orange, white } = statusColor;
  return item?.status === "paid"
    ? green
    : item?.status === "pending"
    ? orange
    : item?.status === "draft"
    ? white
    : null;
};

export const transformData = (date) => {
  return new Date(date).toString().slice(0, -46);
};
