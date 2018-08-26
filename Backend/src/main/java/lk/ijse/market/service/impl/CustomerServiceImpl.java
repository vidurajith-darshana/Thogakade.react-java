package lk.ijse.market.service.impl;

import lk.ijse.market.dto.CustomerDTO;
import lk.ijse.market.entity.Customer;
import lk.ijse.market.repository.CustomerRepository;
import lk.ijse.market.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveCustomer(CustomerDTO customerDTO) {
        customerRepository.save(new Customer(0,customerDTO.getName(),customerDTO.getAddress(),customerDTO.getImage()));
        return true;
    }

    @Override
    public List<CustomerDTO> findAll() {
        try{
            List<Customer> customerList=customerRepository.findAll();
            List<CustomerDTO> list=new ArrayList<>();
            customerList.forEach(customer->{
                list.add(new CustomerDTO(customer.getId(),customer.getName(),customer.getAddress(),customer.getImage()));
            });

            return list;
        }catch(Exception ex){
            return null;
        }

    }

    @Override
    public CustomerDTO findById(int id) {
        if(customerRepository.existsById(id)){
            Customer customer=customerRepository.findById(id).get();
            return new CustomerDTO(customer.getId(),customer.getName(),customer.getAddress(),customer.getImage());
        }else{
            throw new RuntimeException("Customer doesn't exist");
        }
    }

    @Override
    public List<CustomerDTO> findByPage(int page, int size) {
        try{
            List<Customer> customerList=customerRepository.findAll(PageRequest.of(page,size)).getContent();
            List<CustomerDTO> list=new ArrayList<>();
            customerList.forEach(customer->{
                list.add(new CustomerDTO(customer.getId(),customer.getName(),customer.getAddress(),customer.getImage()));
            });

            return list;
        }catch(Exception ex){
            return null;
        }

    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean updateCustomer(CustomerDTO customerDTO) {

        if(customerRepository.existsById(customerDTO.getId())){
            customerRepository.save(new Customer(customerDTO.getId(),customerDTO.getName(),customerDTO.getAddress(),customerDTO.getImage()));
            return true;
        }else{
            throw new RuntimeException("Customer doesn't exist");
        }
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean deleteCustomer(CustomerDTO customerDTO) {
        if(customerRepository.existsById(customerDTO.getId())){
            customerRepository.delete(new Customer(customerDTO.getId(),customerDTO.getName(),customerDTO.getAddress(),customerDTO.getImage()));
            return true;
        }else{
            throw new RuntimeException("Customer doesn't exist");
        }
    }

    @Override
    public CustomerDTO getLastCustomer() {
        Customer customer=customerRepository.getLastCustomer();
        CustomerDTO customerDTO=new CustomerDTO(customer.getId(),customer.getName(),customer.getAddress(),customer.getImage());
        return customerDTO;
    }
}
