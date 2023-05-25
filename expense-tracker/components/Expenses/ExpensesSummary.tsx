import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Expense } from "../../types";

interface Props {
  periodName: string;
  expenses: Expense[];
}

export default function ExpensesSummary({ periodName, expenses }: Props) {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
