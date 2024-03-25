import { createContext, useContext, useEffect, useMemo, useState } from "react";

const text =
  "But whats good for sellers may turn out to be bad for buyers, who will now possibly have to account for an expense they haven’t had to pay for in the past. The powerful association, which sets guidelines for most home sales in the country, agreed to eliminate its rules on commissions, changing a decadeslong system that required homesellers to pay both buyer and seller commission fees. Pending court approval of the settlement, the new policy is set to take effect as early as July. ";

const initialUserInputState = {
  userInput: "",
  updateUserInput: (_: string) => void 0,
  startStreaming: () => undefined,
  stopStreaming: () => undefined,
  streaming: false,
  result: "",
};

const UserInputStateContext = createContext<typeof initialUserInputState>(
  initialUserInputState,
);

export const UserInputProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInput, setUserInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [textPointer, setTextPointer] = useState(0);
  const [result, setResult] = useState<string>("");

  const value = useMemo(
    () => ({
      userInput,
      updateUserInput: (x: string) => {
        setUserInput(x);
        return undefined;
      },
      startStreaming: () => {
        setStreaming(true);
        return undefined;
      },
      stopStreaming: () => {
        setStreaming(false);
        return undefined;
      },
      streaming,
      result,
    }),
    [result, streaming, userInput],
  );

  useEffect(() => {
    if (streaming) {
      const interval = setInterval(() => {
        setResult(text.slice(0, textPointer));
        setTextPointer((p) => p + 5);
      }, 150);
      return () => clearInterval(interval);
    }
  });

  return (
    <UserInputStateContext.Provider value={value}>
      {children}
    </UserInputStateContext.Provider>
  );
};

export const useUserInput = () => {
  const ctx = useContext(UserInputStateContext);
  if (!ctx)
    throw new Error("useUserInput must be used within UserInputProvider");
  return ctx;
};
