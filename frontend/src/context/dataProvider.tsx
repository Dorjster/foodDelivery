"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface UserData {
  id: number;
  name: string;
  phone: string;
  email: string;
}

interface RecordInput {
  date: string;
  value: number;
}

interface DataContextType {
  userEmail: string;
  setUserEmail: (email: string) => void;
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  userInput: any;
  setUserInput: (input: any) => void;
  recordInput: RecordInput | null;
  setRecordInput: (input: RecordInput) => void;
}

export const DataContext = createContext<DataContextType | null>(null);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const { push } = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userInput, setUserInput] = useState<any>({});
  const [recordInput, setRecordInput] = useState<RecordInput | null>(null);

  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("tokenFood");

  useEffect(() => {
    if (accessToken) {
      const getLoggedUser = async () => {
        try {
          const { data } = await axios.get<UserData>(
            "https://fooddelivery-pg8c.onrender.com/token",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setUserData(data);
          console.log(data);
          return data;
        } catch (error) {
          console.error("Error getting user data:", error);
          localStorage.removeItem("tokenFood");
          push("/login");
        }
      };
      getLoggedUser();
    } else {
      // push("/login");
    }
  }, [push]);

  const contextValue: DataContextType = {
    userEmail,
    setUserEmail,
    userData,
    setUserData,
    userInput,
    setUserInput,
    recordInput,
    setRecordInput,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("data doesnt exists");
  }

  return context;
};
