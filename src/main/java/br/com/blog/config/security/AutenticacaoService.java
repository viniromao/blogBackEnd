package br.com.blog.config.security;

import java.util.Optional;

import br.com.blog.entity.User;
import br.com.blog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AutenticacaoService implements UserDetailsService {
	
	@Autowired
	private UserRepository repository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		Optional<User> usuario = repository.findByEmail(username);
//		if (usuario.isPresent()) {
//			return usuario.get();
//		}
		
		throw new UsernameNotFoundException("Dados inválidos!");
	}

}
