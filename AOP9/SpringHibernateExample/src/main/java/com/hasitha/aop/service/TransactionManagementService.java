/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.service;

import com.hasitha.aop.model.Transaction;
import java.util.List;

/**
 *
 * @author Hasitha Lakmal
 */
public interface TransactionManagementService {

    public String transferMoney(int tra_acc_from, double tra_amount, int tra_acc_to);

    public List<Transaction> getTransactionsInquiries(int tra_acc_id);
}
