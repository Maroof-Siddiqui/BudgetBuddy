import React from 'react';

let expenseTrackerData = [
  {
    title: 'November 2023', 
    data: [
      { type: 'Income', name: 'Salary', description: 'Monthly salary', amount: 1500.0, date: '2023-11-07T10:00:00Z' },
      { type: 'Expense', name: 'Food', description: 'Groceries and eating out', amount: -200.0, date: '2023-11-04T08:00:00Z' },
      { type: 'Expense', name: 'Utilities', description: 'Electricity, water, etc.', amount: -100.0, date: '2023-11-12T14:00:00Z' },
      { type: 'Expense', name: 'Transportation', description: 'Public transport and fuel', amount: -80.0, date: '2023-11-06T16:30:00Z' },
      { type: 'Income', name: 'Rent', description: 'Received rent from property', amount: 1200.0, date: '2023-11-05T12:45:00Z' },
      { type: 'Expense', name: 'Entertainment', description: 'Movies, streaming, etc.', amount: -50.0, date: '2023-11-18T20:00:00Z' },
      { type: 'Expense', name: 'Healthcare', description: 'Medical checkup and medicines', amount: -120.0, date: '2023-11-22T09:30:00Z' },
      { type: 'Income', name: 'Part-time Job', description: 'Weekend job', amount: 200.0, date: '2023-11-09T17:00:00Z' },
      { type: 'Expense', name: 'Clothing', description: 'Shopping for clothes', amount: -70.0, date: '2023-11-14T11:00:00Z' },
      { type: 'Income', name: 'Freelance Work', description: 'Web development project', amount: 800.0, date: '2023-11-28T14:30:00Z' },
    ],
  },
  {
    title: 'October 2023',
    data: [
      { type: 'Income', name: 'Freelance Work', description: 'Web development project', amount: 800.0, date: '2023-10-05T09:00:00Z' },
      { type: 'Expense', name: 'Entertainment', description: 'Movies, streaming, etc.', amount: -50.0, date: '2023-10-10T18:30:00Z' },
      { type: 'Expense', name: 'Healthcare', description: 'Medical checkup and medicines', amount: -120.0, date: '2023-10-17T11:15:00Z' },
      { type: 'Income', name: 'Part-time Job', description: 'Weekend job', amount: 200.0, date: '2023-10-22T16:00:00Z' },
      { type: 'Expense', name: 'Food', description: 'Groceries and eating out', amount: -200.0, date: '2023-10-08T13:45:00Z' },
      { type: 'Expense', name: 'Utilities', description: 'Electricity, water, etc.', amount: -100.0, date: '2023-10-19T14:00:00Z' },
      { type: 'Income', name: 'Salary', description: 'Monthly salary', amount: 1500.0, date: '2023-10-25T09:30:00Z' },
      { type: 'Expense', name: 'Transportation', description: 'Public transport and fuel', amount: -80.0, date: '2023-10-14T12:00:00Z' },
      { type: 'Income', name: 'Rent', description: 'Received rent from property', amount: 1200.0, date: '2023-10-28T10:30:00Z' },
      { type: 'Expense', name: 'Clothing', description: 'Shopping for clothes', amount: -70.0, date: '2023-10-30T15:00:00Z' },
    ],
  },
];

export default expenseTrackerData;
