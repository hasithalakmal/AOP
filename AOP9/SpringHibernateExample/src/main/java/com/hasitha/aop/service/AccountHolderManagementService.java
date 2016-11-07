/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.service;

import com.hasitha.aop.model.AccountHolder;
import java.util.List;

/**
 *
 * @author Hasitha Lakmal
 */
public interface AccountHolderManagementService {

    public String registerAccountHolder(String acch_name, String acch_mobile, String acch_adress);

    public String updateAccountHolderDetails(int acch_id, String acch_name, String new_acch_mobile, String new_acch_adress);

    public AccountHolder getAccountHolder(int acch_id);

    public List<AccountHolder> getAllAccountHolders();
}
