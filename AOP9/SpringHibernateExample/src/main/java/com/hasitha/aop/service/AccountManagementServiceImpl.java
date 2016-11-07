/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.service;

import com.hasitha.aop.dao.AccountDao;
import com.hasitha.aop.dao.AccountHolderDao;
import com.hasitha.aop.model.Account;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author Hasitha Lakmal
 */
@Component
public class AccountManagementServiceImpl implements AccountManagementService{
    
    @Autowired
    AccountDao accountDao;

    @Override
    public String registerAccount(int acc_acch_id, double acc_ininital_balance) {
        accountDao.addAccount(acc_acch_id, acc_ininital_balance);
        return "{\"msg\":\"success\"}";
    }

    @Override
    public Account getAccount(int acc_id) {
        Account a = accountDao.getAccount(acc_id);
        return a;
    }

    @Override
    public List<Account> getAllAccounts() {
        List<Account> al = accountDao.getAllAccounts();
        return al;
    }

    @Override
    public List<Account> getUserAccounts(int acc_acch_id) {
        List<Account> al = accountDao.getUserAccounts(acc_acch_id);
        return al;
    }
    
}
