Template.novo.events({

	"submit form": function(e, template) {
		e.preventDefault();

		var input = $("#tarefa");
		var nome = input.val();

		// insere no banco (anterior)
		// Tarefas.insert({nome: nome, data: new Date()});
		Meteor.call("adiciona", { nome: nome, usuario: this.userId });
		
		// limpa o input após inserir no banco
		input.val("");

	}

});