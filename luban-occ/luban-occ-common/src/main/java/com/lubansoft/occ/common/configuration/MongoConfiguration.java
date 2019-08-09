package com.lubansoft.occ.common.configuration;

/**
 * @author liuli
 * @date 2019/7/11 14:45
 */
//@Configuration(先注释了,先不引入mongo )
//@AutoConfigureAfter(MongoDBConfig.class)
//public class MongoConfiguration {
   /* @Autowired
    private MongoDBConfig mongoDBConfig;

    需要使用mongo  时候可以放开注解
    @Bean
    public MongoDbFactory mongoDbFactory() throws UnknownHostException, UnsupportedEncodingException {
        String username = URLEncoder.encode(mongoDBConfig.getUserName(),"UTF-8");
        String password = URLEncoder.encode(mongoDBConfig.getPassword(),"UTF-8");

        String uriStr="mongodb://"+ username +":"+password+"@"+mongoDBConfig.getUri()+"/"+mongoDBConfig.getDatabaseName();

        System.out.println(uriStr);
        MongoClientURI mongoClientURI=new MongoClientURI(uriStr);
        MongoDbFactory mongoDbFactory=new SimpleMongoDbFactory(mongoClientURI);
        return mongoDbFactory;
    }


    @Bean(name = "mongoConverter")
    public MappingMongoConverter mappingMongoConverter(MongoDbFactory factory, MongoMappingContext context, BeanFactory beanFactory) {
        DbRefResolver dbRefResolver = new DefaultDbRefResolver(factory);
        MappingMongoConverter mappingConverter = new MappingMongoConverter(dbRefResolver, context);
        try {
            mappingConverter.setCustomConversions(beanFactory.getBean(CustomConversions.class));
        } catch (NoSuchBeanDefinitionException ignore) {
        }

        // Don't save _class to mongo
        mappingConverter.setTypeMapper(new DefaultMongoTypeMapper(null));

        return mappingConverter;
    }*/
//}
