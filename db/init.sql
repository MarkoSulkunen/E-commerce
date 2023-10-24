CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(36) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL,
  `reset_token` varchar(255) DEFAULT NULL,
  `reset_token_expiration` timestamp NULL DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`id`, `email`, `password`) VALUES (UUID(), 'test@example.com', 'password123');

CREATE TABLE IF NOT EXISTS `reservations` (
  `id` varchar(36) NOT NULL,
  `email` varchar(50) NOT NULL,
  `service` varchar(60) NOT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `reservations` (`id`, `email`, `service`, `date`) VALUES (UUID(), 'test@example.com', 'service1', '2023-10-15 12:00:00');
INSERT INTO `reservations` (`id`, `email`, `service`, `date`) VALUES (UUID(), 'test@example.com', 'service2', '2023-10-20 12:00:00');

