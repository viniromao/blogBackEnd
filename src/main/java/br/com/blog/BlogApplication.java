package br.com.blog;

import br.com.blog.config.security.SecurityConfigurations;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.DelegatingFilterProxy;

import javax.servlet.ServletContext;

@SpringBootApplication
@EnableSpringDataWebSupport
@EnableCaching
public class BlogApplication implements WebApplicationInitializer {

    public static void main(String[] args) {
        SpringApplication.run(BlogApplication.class, args);
    }


    @Override
    public void onStartup(ServletContext sc) {

        AnnotationConfigWebApplicationContext root = new AnnotationConfigWebApplicationContext();
        root.register(SecurityConfigurations.class);

        sc.addListener(new ContextLoaderListener(root));

        sc.addFilter("securityFilter", new DelegatingFilterProxy("springSecurityFilterChain"))
                .addMappingForUrlPatterns(null, false, "/*");
    }
}
