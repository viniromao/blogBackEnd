package br.com.pokemon.modelo;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Perfil implements GrantedAuthority {
	
	private static final long serialVersionUID = 1L;

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String nome;

	@Override
	public String getAuthority() {
		return nome;
	}


	
}
