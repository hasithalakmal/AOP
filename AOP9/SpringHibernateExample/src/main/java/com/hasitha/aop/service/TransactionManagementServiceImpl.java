/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.service;

import com.hasitha.aop.dao.TransactionDao;
import com.hasitha.aop.model.Transaction;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author Hasitha Lakmal
 */
@Component
public class TransactionManagementServiceImpl implements TransactionManagementService{

     @Autowired
     TransactionDao transactionDao;
    
    @Override
    public String transferMoney(int tra_acc_from, double tra_amount, int tra_acc_to) {
        transactionDao.transferMoney(tra_acc_from, tra_amount, tra_acc_to);
        return "{\"msg\":\"success\"}";
    }

    @Override
    public List<Transaction> getTransactionsInquiries(int tra_acc_id) {
         List<Transaction> t = transactionDao.getTransactionsHistory(tra_acc_id);
         return t;
    }
    
}
