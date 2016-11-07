/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.dao;

import com.hasitha.aop.model.AccountHolder;
import java.util.List;

/**
 *
 * @author Hasitha Lakmal
 */
public interface AccountHolderDao {

    public void addAccountHolder(String acch_name, String acch_mobile, String acch_adress);

    public void updateAccountHolder(int acch_id, String acch_name, String acch_mobile, String acch_adress);

    public AccountHolder getAccountHolder(int acch_id);

    public List<AccountHolder> getAllAccountHolders();

}
