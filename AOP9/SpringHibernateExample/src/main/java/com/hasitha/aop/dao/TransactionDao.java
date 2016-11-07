/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.dao;

import com.hasitha.aop.model.Transaction;
import java.util.List;

/**
 *
 * @author Hasitha Lakmal
 */
public interface TransactionDao {

    public void transferMoney(int tra_acc_from, double tra_amount, int tra_acc_to);

    public List<Transaction> getTransactionsHistory(int tra_acc_id);
}
