import {
  Home,
  People,
  Analytics,
  Inventory,
  FilterFrames,
  CreditScore,
  CurrencyRupee,
  CreditCard,
} from "@mui/icons-material";
import profile from '../../images/Profile.png';
export const SidebarData = [
  {
    icon: Home,
    heading: "Dashboard",
  },
  {
    icon: FilterFrames,
    heading: "Orders",
  },
  {
    icon: People,
    heading: "Customers",
  },
  {
    icon: Inventory,
    heading: "Proucts",
  },
  {
    icon: Analytics,
    heading: "Analysis",
  },
];
export const CardsData = [
  {
    title: "Revenue",
    color: {
      Background: "#20B2AA",
      boxShadow: "0px 10px 20px 0px #80808029",
    },
    barValue: 70,
    value:"16,00,000",
    png:CurrencyRupee,
    series: [
        {
            name:"Revenue",
            data:[39,48,35,53,98,101,45,71,55,65,79,90],
        },
    ],
  },
  {
    title: "Expenses",
    color: {
      Background: "#F08080",
      boxShadow: "0px 10px 20px 0px #80808029",
    },
    barValue: 50,
    value:"7,00,000",
    png:CreditCard,
    series: [
        {
            name:"Expenses",
            data:[30,45,25,51,97,110,64,98,61,56,76,100],
        },
    ],
  },
  {
    title: "Credit",
    color: {
      Background: "#BA55D3",
      boxShadow: "0px 10px 20px 0px #80808029",
    },
    barValue: 30,
    value:"4,50,000",
    png:CreditScore,
    series: [
        {
            name:"Loans",
            data:[40,42,45,68,98,56,90,87,44,67,69,30],
        },
    ],
  },
];
export const profileData =[
      {
        name: 'Satya',
        username:'Satya9017',
        bio:'Web Devloper | Finance Enthusiast',
        avatar:profile,
      },
];