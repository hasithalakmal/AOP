/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.service;

import com.hasitha.aop.dao.AccountHolderDao;
import com.hasitha.aop.model.AccountHolder;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author Hasitha Lakmal
 */
@Component
public class AccountHolderManagementServiceImpl implements AccountHolderManagementService{
    
    @Autowired
    AccountHolderDao accountHolderDao;

    @Override
    public String registerAccountHolder(String acch_name, String acch_mobile, String acch_adress) {
        accountHolderDao.addAccountHolder(acch_name, acch_mobile, acch_adress);
         return "{\"msg\":\"success\"}";
    }

    @Override
    public String updateAccountHolderDetails(int acch_id, String acch_name, String new_acch_mobile, String new_acch_adress) {
         accountHolderDao.updateAccountHolder(acch_id, acch_name, new_acch_mobile, new_acch_adress);
          return "{\"msg\":\"success\"}";
    }

    @Override
    public AccountHolder getAccountHolder(int acch_id) {
        AccountHolder ah = accountHolderDao.getAccountHolder(acch_id);
        return ah;
    }

    @Override
    public List<AccountHolder> getAllAccountHolders() {
        List<AccountHolder> ah = accountHolderDao.getAllAccountHolders();
        return ah;
    }
    
}
