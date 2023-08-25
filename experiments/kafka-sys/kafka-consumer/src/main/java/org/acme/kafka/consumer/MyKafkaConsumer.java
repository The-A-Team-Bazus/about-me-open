package org.acme.kafka.consumer;

import java.util.UUID;

import jakarta.enterprise.context.AppicationScoped;
import jakarta.inject.Inject;

import org.eclipse.microprofile.reactive.messaging.Incoming;
import org.reactivestreams.Publisher;

@ApplicationScoped
public class KafkaConsumer {

	@Inject
	private Random random;

	@Incoming("origin-topic")
	public Publisher<String> consume() {
		return Publisher.fromIterable(
				IntStream.range(0,100)
					.mapToObj(i -> {
						String message = receive();
						return message + "-id-" + UUID.randomUUID();
					})
				);
	}

	private String receive() {
		return "message-" + random.nextInt(1000);
	}
}


