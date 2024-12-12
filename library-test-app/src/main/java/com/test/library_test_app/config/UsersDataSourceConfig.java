package com.test.library_test_app.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource; 
import java.util.HashMap;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
        entityManagerFactoryRef = "usersEntityManagerFactory",
        transactionManagerRef = "usersTransactionManager",
        basePackages = {"com.test.library_test_app.users.repository"}
)
public class UsersDataSourceConfig {

    @Bean
    @ConfigurationProperties("spring.datasource.users")
    public DataSource usersDataSource(){
        return DataSourceBuilder.create()
                .url("jdbc:mysql://localhost:3306/library")
                .username("root") 
                .password("")
                .driverClassName("com.mysql.cj.jdbc.Driver")
                .build();
    }


    @Bean
    public LocalContainerEntityManagerFactoryBean usersEntityManagerFactory(EntityManagerFactoryBuilder builder,
                                                                            @Qualifier("usersDataSource") DataSource dataSource){
        HashMap<String, Object> properties = new HashMap<>();
        properties.put("hibernate.hbm2ddl.auto", "update");
        properties.put("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
        return builder
                .dataSource(dataSource)
                .properties(properties)
                .packages("com.test.library_test_app.users.entity")
                .persistenceUnit("Users")
                .build();
    }

    @Bean
    public PlatformTransactionManager usersTransactionManager(
            @Qualifier("usersEntityManagerFactory") LocalContainerEntityManagerFactoryBean usersEntityManagerFactory){

        return new JpaTransactionManager(usersEntityManagerFactory.getObject());
    }

}