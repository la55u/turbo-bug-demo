import Alert from "./alert";
import Badge from "./badge";
import Button from "./button";
import { checkboxTheme } from "./checkbox";
import Container from "./container";
import CTA from "./cta";
import Divider from "./divider";
import Drawer from "./drawer";
import { formControlTheme } from "./form-control";
import FormLabel from "./formlabel";
import { inputTheme } from "./input";
import Link from "./link";
import { menuTheme } from "./menu";
import Modal from "./modal";
import { radioTheme } from "./radio";
import Select from "./select";
import Table from "./table";
import { textareaTheme } from "./textarea";

export const components = {
  Alert,
  Badge,
  Button,
  Checkbox: checkboxTheme,
  Modal,
  Drawer,
  Divider,
  FormLabel,
  Form: formControlTheme,
  Input: inputTheme,
  Link,
  Menu: menuTheme,
  Select,
  Table,
  CTA,
  Container,
  Radio: radioTheme,
  Textarea: textareaTheme,
};
