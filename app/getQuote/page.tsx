import {
  Rocket
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isValidElement, type ComponentType, type ReactNode } from "react";
import LogisticsCoverage from "./components/LogisticsCoverage";
import ProcessTimeline from "./components/ProcessTimeline";
import QuoteForm from "./components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote | Mazaya Logistics",
  description:
    "Tell us about your logistics requirements and our team will prepare a customized solution tailored to your business needs across Saudi Arabia, GCC, and worldwide.",
};

type WhyChooseItem = {
  icon: ReactNode | ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

function renderWhyChooseIcon(icon: WhyChooseItem["icon"]) {
  if (isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === "function" || (typeof icon === "object" && icon !== null)) {
    const Icon = icon as ComponentType<{ className?: string }>;
    return <Icon className="w-5 h-5 stroke-[1.8]" />;
  }
  return null;
}

function renderProcessIcon(icon: WhyChooseItem["icon"]) {
  if (isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === "function" || (typeof icon === "object" && icon !== null)) {
    const Icon = icon as ComponentType<{ className?: string }>;
    return <Icon className="w-5 h-5 stroke-[1.8]" />;
  }
  return null;
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3C9.60218 3 9.22064 3.15804 8.93934 3.43934C8.65804 3.72064 8.5 4.10218 8.5 4.5C8.5 4.89782 8.65804 5.27936 8.93934 5.56066C9.22064 5.84196 9.60218 6 10 6C10.3978 6 10.7794 5.84196 11.0607 5.56066C11.342 5.27936 11.5 4.89782 11.5 4.5C11.5 4.10218 11.342 3.72064 11.0607 3.43934C10.7794 3.15804 10.3978 3 10 3ZM7.5 4.5C7.5 3.83696 7.76339 3.20107 8.23223 2.73223C8.70107 2.26339 9.33696 2 10 2C10.663 2 11.2989 2.26339 11.7678 2.73223C12.2366 3.20107 12.5 3.83696 12.5 4.5C12.5 5.16304 12.2366 5.79893 11.7678 6.26777C11.2989 6.73661 10.663 7 10 7C9.33696 7 8.70107 6.73661 8.23223 6.26777C7.76339 5.79893 7.5 5.16304 7.5 4.5ZM15.5 4C15.2348 4 14.9804 4.10536 14.7929 4.29289C14.6054 4.48043 14.5 4.73478 14.5 5C14.5 5.26522 14.6054 5.51957 14.7929 5.70711C14.9804 5.89464 15.2348 6 15.5 6C15.7652 6 16.0196 5.89464 16.2071 5.70711C16.3946 5.51957 16.5 5.26522 16.5 5C16.5 4.73478 16.3946 4.48043 16.2071 4.29289C16.0196 4.10536 15.7652 4 15.5 4ZM13.5 5C13.5 4.46957 13.7107 3.96086 14.0858 3.58579C14.4609 3.21071 14.9696 3 15.5 3C16.0304 3 16.5391 3.21071 16.9142 3.58579C17.2893 3.96086 17.5 4.46957 17.5 5C17.5 5.53043 17.2893 6.03914 16.9142 6.41421C16.5391 6.78929 16.0304 7 15.5 7C14.9696 7 14.4609 6.78929 14.0858 6.41421C13.7107 6.03914 13.5 5.53043 13.5 5ZM3.5 5C3.5 4.73478 3.60536 4.48043 3.79289 4.29289C3.98043 4.10536 4.23478 4 4.5 4C4.76522 4 5.01957 4.10536 5.20711 4.29289C5.39464 4.48043 5.5 4.73478 5.5 5C5.5 5.26522 5.39464 5.51957 5.20711 5.70711C5.01957 5.89464 4.76522 6 4.5 6C4.23478 6 3.98043 5.89464 3.79289 5.70711C3.60536 5.51957 3.5 5.26522 3.5 5ZM4.5 3C3.96957 3 3.46086 3.21071 3.08579 3.58579C2.71071 3.96086 2.5 4.46957 2.5 5C2.5 5.53043 2.71071 6.03914 3.08579 6.41421C3.46086 6.78929 3.96957 7 4.5 7C5.03043 7 5.53914 6.78929 5.91421 6.41421C6.28929 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.28929 3.96086 5.91421 3.58579C5.53914 3.21071 5.03043 3 4.5 3ZM5.1 14.998L5 15C4.46957 15 3.96086 14.7893 3.58579 14.4142C3.21071 14.0391 3 13.5304 3 13V9.25C3 9.1837 3.02634 9.12011 3.07322 9.07322C3.12011 9.02634 3.1837 9 3.25 9H5.014C5.054 8.633 5.184 8.292 5.379 8H3.25C2.56 8 2 8.56 2 9.25V13C1.99995 13.4281 2.09154 13.8513 2.2686 14.2411C2.44566 14.6309 2.7041 14.9782 3.02655 15.2599C3.34901 15.5415 3.728 15.7508 4.13807 15.8738C4.54813 15.9968 4.97978 16.0307 5.404 15.973C5.26965 15.6592 5.16779 15.3325 5.1 14.998ZM14.596 15.973C14.728 15.991 14.8627 16 15 16C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V9.25C18 8.56 17.44 8 16.75 8H14.621C14.817 8.292 14.946 8.633 14.986 9H16.75C16.8163 9 16.8799 9.02634 16.9268 9.07322C16.9737 9.12011 17 9.1837 17 9.25V13C17.0001 13.2711 16.945 13.5394 16.8382 13.7886C16.7314 14.0377 16.575 14.2626 16.3786 14.4495C16.1822 14.6363 15.9498 14.7813 15.6956 14.8756C15.4415 14.9699 15.1708 15.0116 14.9 14.998C14.8322 15.3325 14.7303 15.6592 14.596 15.973ZM7.25 8C6.56 8 6 8.56 6 9.25V14C6 15.0609 6.42143 16.0783 7.17157 16.8284C7.92172 17.5786 8.93913 18 10 18C11.0609 18 12.0783 17.5786 12.8284 16.8284C13.5786 16.0783 14 15.0609 14 14V9.25C14 8.56 13.44 8 12.75 8H7.25ZM7 9.25C7 9.1837 7.02634 9.12011 7.07322 9.07322C7.12011 9.02634 7.1837 9 7.25 9H12.75C12.8163 9 12.8799 9.02634 12.9268 9.07322C12.9737 9.12011 13 9.1837 13 9.25V14C13 14.7956 12.6839 15.5587 12.1213 16.1213C11.5587 16.6839 10.7956 17 10 17C9.20435 17 8.44129 16.6839 7.87868 16.1213C7.31607 15.5587 7 14.7956 7 14V9.25Z" fill="#FFBB00" />
    </svg>),
    title: "Professional Operations Team",
    description: "Skilled professionals ensuring excellence in every operation.",
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 10C1.25 14.825 5.175 18.75 10 18.75C14.825 18.75 18.75 14.825 18.75 10C18.75 5.175 14.825 1.25 10 1.25C5.175 1.25 1.25 5.175 1.25 10ZM2.52562 9.375C2.61937 8.24375 2.965 7.18375 3.50563 6.25H5.72438C5.32297 7.24701 5.08491 8.30222 5.01938 9.375H2.52562ZM6.27187 9.375C6.34847 8.29155 6.62612 7.23182 7.09063 6.25H9.375V9.375H6.27187ZM9.375 10.625H6.27187C6.34847 11.7085 6.62612 12.7682 7.09063 13.75H9.375V10.625ZM9.375 15H7.81625C8.25811 15.6352 8.78226 16.2089 9.375 16.7062V15ZM11.8781 17.2625C13.3107 16.8909 14.6014 16.1036 15.5875 15H13.6662C13.1828 15.8366 12.5808 16.5986 11.8787 17.2625M14.275 13.75H16.4937V13.7513C17.0489 12.795 17.384 11.727 17.4744 10.625H14.9806C14.9147 11.6979 14.6768 12.7531 14.275 13.75ZM13.7275 10.625C13.6509 11.7085 13.3733 12.7682 12.9087 13.75H10.625V10.625H13.7275ZM14.98 9.375H17.4738C17.3833 8.27298 17.0483 7.20498 16.4931 6.24875V6.25H14.2744C14.6762 7.24694 14.9141 8.30215 14.98 9.375ZM12.9087 6.25C13.3733 7.23182 13.6509 8.29155 13.7275 9.375H10.625V6.25H12.9087ZM13.6662 5H15.5869C14.6021 3.89775 13.3136 3.11107 11.8831 2.73875C12.5833 3.40257 13.1843 4.16421 13.6662 5ZM10.625 3.29375V5H12.1838C11.7419 4.36483 11.2177 3.79108 10.625 3.29375ZM9.375 3.29375C8.78226 3.79108 8.25811 4.36483 7.81625 5H9.375V3.29375ZM10.625 15V16.7062C11.2177 16.2089 11.7419 15.6352 12.1838 15H10.625ZM3.50563 13.75H5.72688C5.32461 12.7531 5.08571 11.6979 5.01938 10.625H2.525C2.61875 11.7563 2.96437 12.8162 3.505 13.75M8.125 17.2631C7.42295 16.5991 6.82086 15.8368 6.3375 15H4.4125C5.39956 16.1045 6.69159 16.892 8.12563 17.2631M6.33375 5C6.81596 4.16439 7.41656 3.40296 8.11688 2.73937C6.68652 3.11152 5.398 3.89798 4.41313 5H6.33375Z" fill="#FFBB00" />
    </svg>),
    title: "Extensive Coverage",
    description: "Strong network across Saudi Arabia, GCC and worldwide.",
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99984 3.125C7.10317 3.125 4.7915 5.38917 4.7915 8.13833C4.7915 9.80917 5.47484 11.2492 6.69567 12.1467C6.96484 12.3442 7.19567 12.6392 7.28317 13.0133C7.35567 13.3208 7.43817 13.695 7.51984 14.0917H9.37484V13.1892C9.37472 13.0702 9.40854 12.9537 9.47234 12.8533L10.1407 11.8033L8.6415 10.6267C8.51938 10.5309 8.43723 10.3932 8.41105 10.2402C8.38486 10.0873 8.41651 9.93007 8.49984 9.79917L9.47234 8.2725C9.51644 8.20323 9.57375 8.14332 9.64101 8.0962C9.70826 8.04908 9.78414 8.01566 9.86431 7.99786C9.94448 7.98007 10.0274 7.97823 10.1082 7.99247C10.1891 8.0067 10.2664 8.03673 10.3357 8.08083C10.4049 8.12493 10.4648 8.18225 10.512 8.2495C10.5591 8.31676 10.5925 8.39264 10.6103 8.4728C10.6281 8.55297 10.6299 8.63586 10.6157 8.71674C10.6015 8.79761 10.5714 8.87489 10.5273 8.94417L9.859 9.99333L11.3582 11.1708C11.4801 11.2665 11.5621 11.4041 11.5883 11.5569C11.6144 11.7096 11.5829 11.8667 11.4998 11.9975L10.6248 13.3717V14.0917H12.4798C12.5615 13.695 12.644 13.3208 12.7165 13.0133C12.8048 12.6392 13.0348 12.3442 13.304 12.1467C14.524 11.2492 15.2082 9.80833 15.2082 8.13833C15.2082 5.38917 12.8965 3.125 9.99984 3.125ZM12.2407 15.3417H7.75817C7.84984 15.8725 7.92234 16.375 7.94484 16.7367C7.96734 17.1175 8.2515 17.4583 8.67067 17.5483L8.834 17.5842C9.60067 17.75 10.3965 17.75 11.164 17.5842L11.3273 17.5483C11.7465 17.4583 12.0307 17.1175 12.054 16.7367C12.0757 16.3758 12.1482 15.8725 12.2407 15.3417ZM3.5415 8.13833C3.5415 4.65833 6.45317 1.875 9.99984 1.875C13.5465 1.875 16.4582 4.65917 16.4582 8.13833C16.4582 10.1583 15.6215 11.9942 14.044 13.1533C13.9908 13.1875 13.9516 13.2395 13.9332 13.3C13.8143 13.8099 13.7048 14.3219 13.6048 14.8358C13.4523 15.6175 13.3282 16.3758 13.3023 16.8125C13.244 17.7775 12.534 18.5667 11.5923 18.7708L11.429 18.8058C10.4873 19.0092 9.51234 19.0092 8.57067 18.8058L8.40734 18.7708C7.46567 18.5675 6.75567 17.7775 6.69734 16.8125C6.6715 16.3758 6.54734 15.6175 6.39484 14.8358C6.29486 14.3219 6.1854 13.8099 6.0665 13.3C6.04811 13.2395 6.00883 13.1875 5.95567 13.1533C4.37817 11.995 3.5415 10.1575 3.5415 8.13833Z" fill="#FFBB00" />
    </svg>),
    title: "Flexible Solutions",
    description: "Customized logistics solutions tailored to your business needs.",
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6237 7.82458C12.6237 7.82458 11.2778 11.6171 10.6387 12.2792C10.3301 12.5903 9.9114 12.7674 9.47322 12.7721C9.03505 12.7769 8.61264 12.6088 8.29743 12.3044C7.98223 12 7.79959 11.5837 7.78906 11.1456C7.77852 10.7076 7.94094 10.283 8.24115 9.96375C8.88032 9.30125 12.6237 7.82458 12.6237 7.82458Z" stroke="#FFBB00" stroke-width="1.66667" stroke-linejoin="round" />
      <path d="M16.1875 16.1875C17.0011 15.3757 17.6463 14.4112 18.0861 13.3494C18.5258 12.2876 18.7514 11.1493 18.75 10C18.75 5.1675 14.8325 1.25 10 1.25C5.1675 1.25 1.25 5.1675 1.25 10C1.25 12.4162 2.22917 14.6037 3.8125 16.1875M10 1.66667V3.33333M16.1854 4.6425L14.8904 5.69125M17.7175 11.3471L16.0937 10.9721M2.28208 11.3471L3.90625 10.9721M3.81458 4.6425L5.10958 5.69125" stroke="#FFBB00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>),
    title: "Fast Execution",
    description: "Quick response and efficient execution for timely delivery.",
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1.25C7.2875 1.25 5.0375 3.2625 4.65625 5.86875C3.81815 6.30679 3.11592 6.96585 2.62566 7.77451C2.1354 8.58317 1.8758 9.51058 1.875 10.4562C1.875 11.575 2.25 12.6875 2.93125 13.5875C2.96875 13.6375 3.05 13.7375 3.0875 13.7875L7.05625 18.4688L9.125 16.0312L8.16875 15.225L7.05625 16.5375L4.05 12.9938L3.93125 12.8375C3.41236 12.1517 3.1295 11.3162 3.125 10.4562C3.125 9.23125 3.7 8.0875 4.64375 7.35625C4.76875 8.275 5.1375 9.1625 5.70625 9.91875C5.74375 9.96875 5.825 10.0688 5.8625 10.1188L10 14.9937L10.8125 14.0312L6.825 9.325L6.7 9.15625C6.15197 8.43533 5.8536 7.55556 5.85 6.65C5.85165 5.54986 6.28941 4.49525 7.06733 3.71733C7.84525 2.93941 8.89986 2.50165 10 2.5C11.9312 2.5 13.5625 3.83125 14.0188 5.625H15.3C14.8187 3.1375 12.625 1.25 10 1.25ZM13.75 7.5C12.3687 7.5 11.25 8.61875 11.25 10C11.25 11.3813 12.3687 12.5 13.75 12.5C15.1313 12.5 16.25 11.3813 16.25 10C16.25 8.61875 15.1313 7.5 13.75 7.5ZM13.75 11.25C13.0625 11.25 12.5 10.6875 12.5 10C12.5 9.3125 13.0625 8.75 13.75 8.75C14.4375 8.75 15 9.3125 15 10C15 10.6875 14.4375 11.25 13.75 11.25ZM10 6.875C9.66848 6.875 9.35054 6.7433 9.11612 6.50888C8.8817 6.27446 8.75 5.95652 8.75 5.625C8.75 5.29348 8.8817 4.97554 9.11612 4.74112C9.35054 4.5067 9.66848 4.375 10 4.375C10.3315 4.375 10.6495 4.5067 10.8839 4.74112C11.1183 4.97554 11.25 5.29348 11.25 5.625C11.25 5.95652 11.1183 6.27446 10.8839 6.50888C10.6495 6.7433 10.3315 6.875 10 6.875Z" fill="#FFBB00" />
    </svg>),
    title: "High-Quality Operation",
    description: "Commitment to quality, safety and operational excellence.",
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.0415 5C5.87574 5 5.71677 5.06585 5.59956 5.18306C5.48235 5.30027 5.4165 5.45924 5.4165 5.625V11.875C5.4165 12.0408 5.48235 12.1997 5.59956 12.3169C5.71677 12.4342 5.87574 12.5 6.0415 12.5C6.20726 12.5 6.36624 12.4342 6.48345 12.3169C6.60066 12.1997 6.6665 12.0408 6.6665 11.875V5.625C6.6665 5.45924 6.60066 5.30027 6.48345 5.18306C6.36624 5.06585 6.20726 5 6.0415 5ZM9.99984 5C9.83408 5 9.67511 5.06585 9.5579 5.18306C9.44069 5.30027 9.37484 5.45924 9.37484 5.625V9.375C9.37484 9.54076 9.44069 9.69973 9.5579 9.81694C9.67511 9.93415 9.83408 10 9.99984 10C10.1656 10 10.3246 9.93415 10.4418 9.81694C10.559 9.69973 10.6248 9.54076 10.6248 9.375V5.625C10.6248 5.45924 10.559 5.30027 10.4418 5.18306C10.3246 5.06585 10.1656 5 9.99984 5ZM13.3332 5.625C13.3332 5.45924 13.399 5.30027 13.5162 5.18306C13.6334 5.06585 13.7924 5 13.9582 5C14.1239 5 14.2829 5.06585 14.4001 5.18306C14.5173 5.30027 14.5832 5.45924 14.5832 5.625V13.5417C14.5832 13.7074 14.5173 13.8664 14.4001 13.9836C14.2829 14.1008 14.1239 14.1667 13.9582 14.1667C13.7924 14.1667 13.6334 14.1008 13.5162 13.9836C13.399 13.8664 13.3332 13.7074 13.3332 13.5417V5.625Z" fill="#FFBB00" />
      <path d="M3.12484 1.66663H16.8748C17.6798 1.66663 18.3332 2.31996 18.3332 3.12496V16.875C18.3332 17.2617 18.1795 17.6327 17.906 17.9062C17.6325 18.1796 17.2616 18.3333 16.8748 18.3333H3.12484C2.73806 18.3333 2.36713 18.1796 2.09364 17.9062C1.82015 17.6327 1.6665 17.2617 1.6665 16.875V3.12496C1.6665 2.31996 2.31984 1.66663 3.12484 1.66663ZM2.9165 3.12496V16.875C2.9165 16.99 3.00984 17.0833 3.12484 17.0833H16.8748C16.9301 17.0833 16.9831 17.0613 17.0222 17.0223C17.0612 16.9832 17.0832 16.9302 17.0832 16.875V3.12496C17.0832 3.06971 17.0612 3.01672 17.0222 2.97765C16.9831 2.93858 16.9301 2.91663 16.8748 2.91663H3.12484C3.06958 2.91663 3.01659 2.93858 2.97752 2.97765C2.93845 3.01672 2.9165 3.06971 2.9165 3.12496Z" fill="#FFBB00" />
    </svg>),
    title: "Experience in Seasonal Projects",
    description: "Proven expertise in handling high-volume and seasonal demands.",
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0832 5.83329L9.99984 1.66663L2.9165 5.83329V14.1666L9.99984 18.3333L17.0832 14.1666V5.83329Z" stroke="#FFBB00" stroke-width="1.66667" stroke-linejoin="round" />
      <path d="M9.99984 9.16667V12.5M13.3332 7.5V12.5M6.6665 10.8333V12.5" stroke="#FFBB00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>),
    title: "Regular Performance Reports",
    description: "Transparent reporting and real-time visibility of your operations.",
  },
];

const PROCESS_BENEFITS = [
  {
    icon: (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3625 17.2792C19.423 16.2186 20.1451 14.8674 20.4377 13.3964C20.7302 11.9254 20.58 10.4006 20.006 9.01502C19.432 7.62939 18.4601 6.44508 17.213 5.61185C15.9659 4.77861 14.4998 4.33388 13 4.33388C11.5002 4.33388 10.0341 4.77861 8.78701 5.61185C7.53995 6.44508 6.56798 7.62939 5.99399 9.01502C5.42 10.4006 5.26978 11.9254 5.56233 13.3964C5.85487 14.8674 6.57703 16.2186 7.6375 17.2792L13 22.6417L18.3625 17.2792ZM13 25.7053L6.10567 18.811C4.74212 17.4474 3.81354 15.7101 3.43734 13.8188C3.06114 11.9275 3.25423 9.96713 3.99219 8.18556C4.73015 6.40398 5.97983 4.88125 7.58321 3.80991C9.18658 2.73857 11.0716 2.16675 13 2.16675C14.9284 2.16675 16.8134 2.73857 18.4168 3.80991C20.0202 4.88125 21.2699 6.40398 22.0078 8.18556C22.7458 9.96713 22.9389 11.9275 22.5627 13.8188C22.1865 15.7101 21.2579 17.4474 19.8943 18.811L13 25.7053ZM14.0833 11.9167H18.4167V14.0833H11.9167V6.5H14.0833V11.9167Z" fill="white" />
    </svg>),
    title: "Real-time Tracking",
    description: "Live updates at every step of your shipment.",
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.25 5.0375V13C3.25 20.9625 13 24.375 13 24.375C13 24.375 22.75 20.9625 22.75 13V5.0375L13 1.625L3.25 5.0375Z" stroke="white" stroke-width="2.16667" stroke-linecap="square" />
      <path d="M8.854 12.1031L11.9166 15.1667L18.045 9.03833" stroke="white" stroke-width="2.16667" stroke-linecap="square" />
    </svg>),
    title: "Secure & Reliable",
    description: "Advanced security and care at every stage.",
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2109_1040)">
        <path d="M5.57157 13.0001V8.11581C5.58607 7.15572 5.78988 6.20794 6.17131 5.32675C6.55274 4.44557 7.1043 3.64831 7.79438 2.98066C8.48446 2.31301 9.2995 1.78808 10.1928 1.43596C11.0861 1.08384 12.0401 0.911451 13.0001 0.928663C13.9602 0.911451 14.9142 1.08384 15.8075 1.43596C16.7008 1.78808 17.5158 2.31301 18.2059 2.98066C18.896 3.64831 19.4475 4.44557 19.829 5.32675C20.2104 6.20794 20.4142 7.15572 20.4287 8.11581V13.0001M16.7144 22.7501C17.6995 22.7501 18.6443 22.3588 19.3408 21.6622C20.0374 20.9656 20.4287 20.0209 20.4287 19.0358V14.8572M16.7144 22.7501C16.7144 23.3658 16.4698 23.9562 16.0345 24.3916C15.5991 24.8269 15.0087 25.0715 14.393 25.0715H11.6073C10.9916 25.0715 10.4011 24.8269 9.96578 24.3916C9.53043 23.9562 9.28585 23.3658 9.28585 22.7501C9.28585 22.1344 9.53043 21.5439 9.96578 21.1086C10.4011 20.6732 10.9916 20.4287 11.6073 20.4287H14.393C15.0087 20.4287 15.5991 20.6732 16.0345 21.1086C16.4698 21.5439 16.7144 22.1344 16.7144 22.7501ZM2.78585 10.2144H4.643C4.88927 10.2144 5.12545 10.3122 5.2996 10.4863C5.47374 10.6605 5.57157 10.8967 5.57157 11.1429V16.7144C5.57157 16.9606 5.47374 17.1968 5.2996 17.371C5.12545 17.5451 4.88927 17.6429 4.643 17.6429H2.78585C2.29331 17.6429 1.82094 17.4473 1.47266 17.099C1.12437 16.7507 0.928711 16.2784 0.928711 15.7858V12.0715C0.928711 11.579 1.12437 11.1066 1.47266 10.7583C1.82094 10.41 2.29331 10.2144 2.78585 10.2144ZM23.2144 17.6429H21.3573C21.111 17.6429 20.8748 17.5451 20.7007 17.371C20.5265 17.1968 20.4287 16.9606 20.4287 16.7144V11.1429C20.4287 10.8967 20.5265 10.6605 20.7007 10.4863C20.8748 10.3122 21.111 10.2144 21.3573 10.2144H23.2144C23.707 10.2144 24.1793 10.41 24.5276 10.7583C24.8759 11.1066 25.0716 11.579 25.0716 12.0715V15.7858C25.0716 16.2784 24.8759 16.7507 24.5276 17.099C24.1793 17.4473 23.707 17.6429 23.2144 17.6429Z" stroke="white" stroke-width="1.85714" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_2109_1040">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>),
    title: "24/7 Support",
    description: "Our team is always here to assist you.",
  },
  {
    icon: (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.125 9.75H14.625V3.25H4.875V22.75H21.125V9.75ZM20.4521 8.125L16.25 3.92285V8.125H20.4521ZM4.0625 1.625H16.25L22.75 8.125V23.5625C22.75 23.778 22.6644 23.9847 22.512 24.137C22.3597 24.2894 22.153 24.375 21.9375 24.375H4.0625C3.84701 24.375 3.64035 24.2894 3.48798 24.137C3.3356 23.9847 3.25 23.778 3.25 23.5625V2.4375C3.25 2.22201 3.3356 2.01535 3.48798 1.86298C3.64035 1.7106 3.84701 1.625 4.0625 1.625ZM8.125 13H17.875V14.625H8.125V13ZM8.125 8.125H12.1875V9.75H8.125V8.125ZM8.125 17.875H17.875V19.5H8.125V17.875Z" fill="white" />
    </svg>),
    title: "Complete Transparency",
    description: "Full visibility and clear updates throughout the process.",
  },
];

export default function GetQuotePage() {
  return (
    <div className="relative min-h-screen bg-[#070502] text-white selection:bg-[#f5b800] selection:text-black font-sans pb-24 overflow-x-hidden">
      {/* ── SECTION 1: HERO SECTION ── */}
      <section className="relative w-full pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        {/* Background Image with Cinematic Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/getQuote/get-hero.jpg"
            alt="Mazaya Logistics Port and Freight Fleet"
            fill
            priority
            unoptimized
            className="object-cover object-right lg:object-center opacity-85 select-none"
          />
          {/* Gradients: dark on left for high contrast readability, subtle vignette on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070502] via-[#070502]/85 to-[#070502]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070502] via-transparent to-[#070502]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,184,0,0.12)_0%,transparent_60%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#f5b800] font-bold text-sm tracking-wider">
                =
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#f5f5f5] uppercase">
                GET QUOTE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Let’s Build the Right{" "}
              <span className="text-[#fae4a8] block sm:inline">
                Logistics Solution for You
              </span>
            </h1>

            {/* Yellow accent divider */}
            <div className="w-20 h-[2px] bg-[#f5b800] mt-4 mb-6" />

            {/* Sub-paragraphs */}
            <div className="space-y-4 max-w-2xl text-sm sm:text-base text-[#cfc7bc] leading-relaxed">
              <p>
                Tell us about your logistics requirements and our team will prepare
                a solution tailored to your business needs.
              </p>
              <p className="text-[#a89f92]">
                From transportation and warehousing to delivery and fulfillment,
                share your requirements with us and take the next step toward
                smarter logistics.
              </p>
            </div>

            {/* Geographic Coverage Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium">
              <div className="inline-flex items-center gap-2">
                <span className="text-base">
                  <Image src="/getQuote/flag-saudi-arabia.png" alt="Saudi Arabia" width={24} height={24} />
                </span>
                <span className="text-[#f5b800]">Saudi Arabia</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-base">🌍</span>
                <span className="text-[#f5b800]">GCC Countries</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-base">✈️</span>
                <span className="text-[#f5b800]">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 space-y-24">
        {/* ── SECTION 2: FORM & WHY CHOOSE MAZAYA ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Quote Form (Client Component) */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          {/* Right Column: Why Choose Mazaya Logistics? */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0e0a03]/80 border border-[#2b200e] p-6 sm:p-8 lg:p-10 backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why Choose{" "}
              <span className="text-[#f5b800]">Mazaya Logistics?</span>
            </h2>
            <div className="w-14 h-[2px] bg-[#f5b800] mt-3 mb-8" />

            <div className="space-y-6">
              {WHY_CHOOSE_ITEMS.map((item, idx) => {
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-[#f5b800]/40 bg-[#161005] flex items-center justify-center text-[#f5b800] shrink-0 group-hover:border-[#f5b800] group-hover:bg-[#f5b800]/10 transition-all duration-300">
                      {renderWhyChooseIcon(item.icon)}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#f5b800] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#9e9587] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: LOGISTICS COVERAGE ── */}
        <LogisticsCoverage />

        {/* ── SECTION 4: PROCESS TIMELINE ── */}
        <div className="space-y-12">
          <ProcessTimeline />

          {/* Benefits Bar (Screenshot 4) */}
          <div className="rounded-xl bg-[#0c0903] border border-[#2b200e] p-6 lg:p-8 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#2b200e]/70">
              {PROCESS_BENEFITS.map((benefit, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3.5 ${index > 0 ? "pt-5 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                      }`}
                  >
                    <div className="w-10 h-10 rounded-full border border-[#f5b800]/40 bg-[#161005] flex items-center justify-center text-[#f5b800] shrink-0">
                      {renderProcessIcon(benefit.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#f5b800] tracking-wide">
                        {benefit.title}
                      </h4>
                      <p className="mt-1 text-xs text-[#9e9587] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── SECTION 5: READY TO GET STARTED? CTA BANNER ── */}
          <div className="rounded-xl bg-gradient-to-r from-[#120d04] via-[#0c0903] to-[#120d04] border border-[#38280f] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#211607] border border-[#f5b800]/30 flex items-center justify-center text-[#f5b800] shrink-0">
                <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M64.1312 13.6553C64.0696 12.6706 63.6505 11.7424 62.9527 11.0451C62.2548 10.3477 61.3262 9.92935 60.3416 9.86856C56.7832 9.65754 47.6893 9.98129 40.1419 17.5287L38.5954 19.0781H21.4916C20.9603 19.0768 20.4342 19.181 19.9435 19.3844C19.4527 19.5878 19.0072 19.8865 18.6327 20.2632L8.70343 30.1897C8.17179 30.7215 7.79883 31.3909 7.62639 32.1228C7.45396 32.8547 7.48886 33.6202 7.7272 34.3334C7.96553 35.0466 8.39787 35.6793 8.9757 36.1605C9.55354 36.6418 10.254 36.9524 10.9986 37.0578L22.3096 38.6361L35.3637 51.6901L36.9419 63.0156C37.0482 63.7597 37.3595 64.4595 37.8411 65.0366C38.3226 65.6136 38.9554 66.0452 39.6685 66.2829C40.3815 66.5206 41.1467 66.555 41.8782 66.3823C42.6097 66.2095 43.2786 65.8365 43.8101 65.305L53.7394 55.3757C54.1161 55.0012 54.4148 54.5557 54.6182 54.0649C54.8217 53.5742 54.9258 53.048 54.9245 52.5168V35.4043L56.471 33.8579C64.0155 26.3047 64.3422 17.2165 64.1312 13.6553ZM11.0159 33.2422C10.9849 33.142 10.9817 33.0353 11.0066 32.9335C11.0316 32.8316 11.0838 32.7385 11.1576 32.664L21.084 22.7145C21.1924 22.607 21.3389 22.5467 21.4916 22.5468H35.1266L22.5091 35.1615L11.4842 33.6237C11.3778 33.6118 11.277 33.5695 11.194 33.5018C11.1109 33.4341 11.0491 33.344 11.0159 33.2422ZM51.4529 52.5082C51.4522 52.6613 51.3909 52.8078 51.2823 52.9157L41.3588 62.8422C41.2834 62.9184 41.1882 62.9722 41.0839 62.9975C40.9796 63.0228 40.8703 63.0185 40.7683 62.9852C40.6663 62.9519 40.5756 62.8909 40.5063 62.809C40.437 62.727 40.3919 62.6274 40.376 62.5213L38.8382 51.4907L51.4529 38.8731V52.5082ZM54.0169 31.4066L36.9998 48.4208L25.5789 37L42.596 19.98C44.8768 17.6846 47.6222 15.9037 50.648 14.757C53.6739 13.6103 56.91 13.1243 60.1392 13.3315C60.2781 13.3431 60.4081 13.4045 60.5053 13.5044C60.6025 13.6042 60.6603 13.7358 60.6682 13.875C60.8734 17.1018 60.3863 20.3352 59.2396 23.3583C58.093 26.3815 56.3132 29.1246 54.0198 31.4037L54.0169 31.4066ZM28.906 55.0115C27.6573 57.7662 23.4514 64.1718 11.5623 64.1718C11.1023 64.1718 10.6611 63.9891 10.3359 63.6639C10.0106 63.3386 9.82788 62.8975 9.82788 62.4375C9.82788 50.5483 16.2335 46.3425 18.9883 45.0937C19.1955 44.9988 19.4195 44.9457 19.6473 44.9373C19.8751 44.9289 20.1023 44.9655 20.3159 45.045C20.5296 45.1244 20.7255 45.2452 20.8925 45.4004C21.0595 45.5555 21.1943 45.7421 21.2892 45.9493C21.3841 46.1566 21.4373 46.3805 21.4456 46.6083C21.454 46.8361 21.4174 47.0634 21.3379 47.277C21.2585 47.4907 21.1377 47.6866 20.9826 47.8536C20.8274 48.0206 20.6409 48.1554 20.4336 48.2503C18.4101 49.1666 13.921 52.1584 13.3602 60.654C21.8558 60.0932 24.8476 55.5896 25.7639 53.5806C25.8588 53.3733 25.9936 53.1868 26.1606 53.0316C26.3276 52.8764 26.5235 52.7557 26.7372 52.6762C26.9508 52.5968 27.178 52.5602 27.4058 52.5686C27.6336 52.5769 27.8576 52.6301 28.0648 52.725C28.2721 52.8199 28.4586 52.9547 28.6138 53.1217C28.769 53.2886 28.8897 53.4846 28.9692 53.6982C29.0486 53.9119 29.0852 54.1391 29.0769 54.3669C29.0685 54.5947 29.0154 54.8186 28.9205 55.0259L28.906 55.0115Z" fill="#FFBB00" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Ready to Get Started?
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#a39b8e] max-w-xl">
                  Share your logistics requirements with our team and let’s create
                  the right solution for your business.
                </p>
              </div>
            </div>

            <Link
              href="#quote-form"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#f5b800] hover:bg-[#e0a700] text-black font-semibold text-sm transition-all duration-200 shrink-0 shadow-lg shadow-[#f5b800]/20 hover:shadow-[#f5b800]/30"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
