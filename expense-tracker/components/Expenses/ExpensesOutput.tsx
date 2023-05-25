import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Expense } from "../../types";

interface Props {
  expenses?: Expense[];
  periodName: string;
}

const DUMMY_EXPENSES: Expense[] = [
  {
    id: 1,
    description: "Uber Eats",
    amount: 23.45,
    date: new Date("2023-04-25"),
  },
  {
    id: 2,
    description: "Clean Code",
    amount: 58.5,
    date: new Date("2023-05-01"),
  },
  {
    id: 3,
    description: "Mac Book Case",
    amount: 18.5,
    date: new Date("2023-05-09"),
  },
  {
    id: 4,
    description: "Uber Eats",
    amount: 13.45,
    date: new Date("2023-05-15"),
  },
];

export default function ExpensesOutput({ expenses, periodName }: Props) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList />
    </View>
  );
}

const styles = StyleSheet.create({});
