/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.service;

import com.hasitha.aop.model.Client_message;
import java.util.List;

/**
 *
 * @author Hasitha Lakmal
 */
public interface Client_messageManagementService {

    public String addClient_message(String msg_title, String msg_body, int msg_acch_id);

    public List<Client_message> getAllClient_messages();

}
